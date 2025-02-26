import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

function ThreeDViewer({ model, color, roughness, glossiness }) {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;
  
    const mountElement = mountRef.current; // ✅ mountRef.current 값을 변수에 저장
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 0.5;
  
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(400, 400);
    mountElement.appendChild(renderer.domElement); // ✅ mountElement 사용
  
    // const light = new THREE.AmbientLight(0xffffff, 1);
    // scene.add(light);
    const dirLight = new THREE.DirectionalLight(0xffffff, 5);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    scene.add(dirLight);
  
    const loader = new GLTFLoader();
    let modelMesh;
  
    loader.load(model, (gltf) => {
        modelMesh = gltf.scene;
        scene.add(modelMesh);
        
        // ✅ 모델 크기 조정 (기본값 1 → 5배 확대)
        modelMesh.scale.set(3, 3, 3); 
        
        // ✅ 모델 중심 위치 조정
        modelMesh.position.set(0, -0.2, 0);
        
        // ✅ 선택한 색상 & 텍스처 적용
        modelMesh.traverse((child) => {
            if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
                color: new THREE.Color(color),
                roughness: roughness,
                metalness: glossiness,
            });
            }
        });
    });
      
  
    const animate = () => {
      requestAnimationFrame(animate);
      if (modelMesh) modelMesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  
    // ✅ 안전한 cleanup function 적용
    return () => {
      if (mountElement && mountElement.contains(renderer.domElement)) {
        mountElement.removeChild(renderer.domElement);
      }
    };
  }, [model, color, roughness, glossiness]);
  

  return <div ref={mountRef} />;
}

export default ThreeDViewer;
