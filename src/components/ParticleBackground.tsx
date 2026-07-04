import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Setup Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Post-Processing ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.8, // strength
      0.1, // radius
      1.0  // threshold
    );
    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- Particles ---
    const particleCount = 15000;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleOriginalPos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(0x001f3f);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 200;
      const y = (Math.random() - 0.5) * 200;
      const z = (Math.random() - 0.5) * 100;

      particlePositions[i3] = x;
      particlePositions[i3 + 1] = y;
      particlePositions[i3 + 2] = z;

      particleOriginalPos[i3] = x;
      particleOriginalPos[i3 + 1] = y;
      particleOriginalPos[i3 + 2] = z;

      particleColors[i3] = baseColor.r;
      particleColors[i3 + 1] = baseColor.g;
      particleColors[i3 + 2] = baseColor.b;

      particleVelocities[i3] = 0;
      particleVelocities[i3 + 1] = 0;
      particleVelocities[i3 + 2] = 0;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));
    particleGeometry.setAttribute('originalPos', new THREE.BufferAttribute(particleOriginalPos, 3));
    particleGeometry.setAttribute('velocity', new THREE.BufferAttribute(particleVelocities, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.2,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Energy Lines ---
    const lineCount = 530;
    const lineGroup = new THREE.Group();
    scene.add(lineGroup);

    const lineMaterial = new THREE.LineDashedMaterial({
      color: 0x88aaff,
      transparent: true,
      opacity: 0.20,
      linewidth: 1, // WebGL linewidth > 1 is rarely supported, ignoring 0.005 visually
      dashSize: 2,
      gapSize: 4,
      blending: THREE.AdditiveBlending
    });

    interface LineData {
      mesh: THREE.Line;
      speed: number;
    }
    const linesData: LineData[] = [];

    for (let i = 0; i < lineCount; i++) {
      const lineGeo = new THREE.BufferGeometry();
      const zStart = (Math.random() - 0.5) * 200;
      const length = Math.random() * 20 + 10;
      const x = (Math.random() - 0.5) * 150;
      const y = (Math.random() - 0.5) * 150;

      const points = [
        new THREE.Vector3(x, y, zStart),
        new THREE.Vector3(x, y, zStart + length)
      ];
      lineGeo.setFromPoints(points);

      const line = new THREE.Line(lineGeo, lineMaterial);
      line.computeLineDistances();
      lineGroup.add(line);
      linesData.push({
        mesh: line,
        speed: Math.random() * 0.2 + 0.1
      });
    }

    // --- Interaction / Raycasting ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2(-9999, -9999);
    
    // Create an invisible plane to raycast against for 3D mouse position
    const planeGeo = new THREE.PlaneGeometry(500, 500);
    const planeMat = new THREE.MeshBasicMaterial({ visible: false });
    const interactionPlane = new THREE.Mesh(planeGeo, planeMat);
    scene.add(interactionPlane);

    let mouse3D = new THREE.Vector3();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(interactionPlane);
      if (intersects.length > 0) {
        mouse3D.copy(intersects[0].point);
      }
    };
    window.addEventListener('mousemove', onMouseMove);

    // --- Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();
    
    const targetColor = new THREE.Color(0xCCFF00); // Highlight color

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      clock.getDelta();

      // Update particles
      const posAttr = particleGeometry.attributes.position;
      const colAttr = particleGeometry.attributes.color;
      const origPosAttr = particleGeometry.attributes.originalPos;
      const velAttr = particleGeometry.attributes.velocity;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        
        // Current position
        const px = posAttr.array[i3];
        const py = posAttr.array[i3 + 1];
        const pz = posAttr.array[i3 + 2];
        
        // Original position
        const ox = origPosAttr.array[i3];
        const oy = origPosAttr.array[i3 + 1];
        const oz = origPosAttr.array[i3 + 2];

        // Velocity
        let vx = velAttr.array[i3];
        let vy = velAttr.array[i3 + 1];
        let vz = velAttr.array[i3 + 2];

        // Calculate distance to mouse
        const dx = mouse3D.x - px;
        const dy = mouse3D.y - py;
        // ignoring Z distance for mouse repulsion effect to make it feel 2D planar over the 3D particles
        const dist = Math.sqrt(dx * dx + dy * dy);

        let mixAmt = 0;

        // Repulsion logic
        if (dist < 20) {
          const force = (20 - dist) * 0.04;
          vx -= (dx / dist) * force;
          vy -= (dy / dist) * force;
          mixAmt = Math.min((20 - dist) / 20 * 0.4, 0.4);
        }

        // Spring logic (return to original position)
        const springForce = 0.02;
        const damping = 0.9;
        
        vx += (ox - px) * springForce;
        vy += (oy - py) * springForce;
        vz += (oz - pz) * springForce;

        vx *= damping;
        vy *= damping;
        vz *= damping;

        // Update arrays
        velAttr.array[i3] = vx;
        velAttr.array[i3 + 1] = vy;
        velAttr.array[i3 + 2] = vz;

        posAttr.array[i3] = px + vx;
        posAttr.array[i3 + 1] = py + vy;
        posAttr.array[i3 + 2] = pz + vz;

        // Color interpolation
        const tempColor = baseColor.clone().lerp(targetColor, mixAmt);
        colAttr.array[i3] = tempColor.r;
        colAttr.array[i3 + 1] = tempColor.g;
        colAttr.array[i3 + 2] = tempColor.b;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;
      velAttr.needsUpdate = true;

      // Update Lines
      linesData.forEach((lineData) => {
        lineData.mesh.position.z += lineData.speed;
        if (lineData.mesh.position.z > 100) {
          lineData.mesh.position.z -= 200;
        }
      });

      // Render
      composer.render();
    };

    animate();

    // --- Resize Handler ---
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      composer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose materials & geometries
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGroup.children.forEach((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose();
        }
      });
      lineMaterial.dispose();
      planeGeo.dispose();
      planeMat.dispose();
      
      composer.dispose();
      renderer.dispose();
      
      if (containerRef.current && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ background: '#030014' }}
    />
  );
}
