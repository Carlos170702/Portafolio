'use client'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Planks_lambert2_0: THREE.Mesh
		Poles_lambert2_0: THREE.Mesh
		Nails_lambert1_0: THREE.Mesh
		pPlane2_lambert3_0: THREE.Mesh
		pPlane3_lambert3_0: THREE.Mesh
		pPlane4_lambert3_0: THREE.Mesh
		pPlane1_lambert3_0: THREE.Mesh
	}
	materials: {
		lambert2: THREE.MeshStandardMaterial
		lambert1: THREE.MeshStandardMaterial
		lambert3: THREE.MeshStandardMaterial
	}
}

export function Message3DModel(props: JSX.IntrinsicElements['groundProjectedEnvImpl']) {
	const { nodes, materials } = useGLTF('/models/3D_MessageModel.glb') as GLTFResult
	return (
		<group
			{...props}
			dispose={null}
			scale={[100, 100, 100]}
		>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Planks_lambert2_0.geometry}
				material={materials.lambert2}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Poles_lambert2_0.geometry}
				material={materials.lambert2}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Nails_lambert1_0.geometry}
				material={materials.lambert1}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pPlane2_lambert3_0.geometry}
				material={materials.lambert3}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pPlane3_lambert3_0.geometry}
				material={materials.lambert3}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pPlane4_lambert3_0.geometry}
				material={materials.lambert3}
			/>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.pPlane1_lambert3_0.geometry}
				material={materials.lambert3}
			/>
		</group>
	)
}

useGLTF.preload('/models/3D_MessageModel.glb')
