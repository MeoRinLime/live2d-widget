import { CubismIdHandle } from '../id/cubismid';
import { CubismVector2 } from '../math/cubismvector2';
import { CubismJson } from '../utils/cubismjson';
export declare class CubismPhysicsJson {
    constructor(buffer: ArrayBuffer, size: number);
    release(): void;
    getGravity(): CubismVector2;
    getWind(): CubismVector2;
    getFps(): number;
    getSubRigCount(): number;
    getTotalInputCount(): number;
    getTotalOutputCount(): number;
    getVertexCount(): number;
    getNormalizationPositionMinimumValue(physicsSettingIndex: number): number;
    getNormalizationPositionMaximumValue(physicsSettingIndex: number): number;
    getNormalizationPositionDefaultValue(physicsSettingIndex: number): number;
    getNormalizationAngleMinimumValue(physicsSettingIndex: number): number;
    getNormalizationAngleMaximumValue(physicsSettingIndex: number): number;
    getNormalizationAngleDefaultValue(physicsSettingIndex: number): number;
    getInputCount(physicsSettingIndex: number): number;
    getInputWeight(physicsSettingIndex: number, inputIndex: number): number;
    getInputReflect(physicsSettingIndex: number, inputIndex: number): boolean;
    getInputType(physicsSettingIndex: number, inputIndex: number): string;
    getInputSourceId(physicsSettingIndex: number, inputIndex: number): CubismIdHandle;
    getOutputCount(physicsSettingIndex: number): number;
    getOutputVertexIndex(physicsSettingIndex: number, outputIndex: number): number;
    getOutputAngleScale(physicsSettingIndex: number, outputIndex: number): number;
    getOutputWeight(physicsSettingIndex: number, outputIndex: number): number;
    getOutputDestinationId(physicsSettingIndex: number, outputIndex: number): CubismIdHandle;
    getOutputType(physicsSettingIndex: number, outputIndex: number): string;
    getOutputReflect(physicsSettingIndex: number, outputIndex: number): boolean;
    getParticleCount(physicsSettingIndex: number): number;
    getParticleMobility(physicsSettingIndex: number, vertexIndex: number): number;
    getParticleDelay(physicsSettingIndex: number, vertexIndex: number): number;
    getParticleAcceleration(physicsSettingIndex: number, vertexIndex: number): number;
    getParticleRadius(physicsSettingIndex: number, vertexIndex: number): number;
    getParticlePosition(physicsSettingIndex: number, vertexIndex: number): CubismVector2;
    _json: CubismJson;
}
import * as $ from './cubismphysicsjson';
export declare namespace Live2DCubismFramework {
    const CubismPhysicsJson: typeof $.CubismPhysicsJson;
    type CubismPhysicsJson = $.CubismPhysicsJson;
}
