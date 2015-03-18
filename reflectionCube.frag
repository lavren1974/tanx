uniform samplerCube texture_cubeMap;
uniform float material_reflectionFactor;
void addCubemapReflection(inout psInternalData data) {
    data.reflection += vec4($textureCubeSAMPLE(texture_cubeMap, fixSeams(cubeMapProject(data.reflDirW))).rgb, material_reflectionFactor);
}
