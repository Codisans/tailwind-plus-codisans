import parse from "parse-svg-path";
import normalize from "normalize-svg-path";
import { compile, morph } from "svg-path-morph";

export type Compiled = {
	commands: string[];
	average: number[][];
	diffs: number[][][];
};

export type PathValue = string | number;

export const pathArrayToString = (pathArray: PathValue[][]): string => {
    return pathArray
        .map((p: PathValue[]) => p.shift() + p.join(" "))
        .join(" ");
};

export const normalizePaths = (paths: string[]): string[] => {
    return paths.map((p) => pathArrayToString(normalize(parse(p))));
};


export const compilePaths = (paths: string[]): Compiled => {
    return compile(paths);
};

export const morphCompiled = (compiled: Compiled, weights: number[]): string => {
    return morph(compiled, weights);
};

export const morphPaths = (paths: string[], weights: number[]): string => {
    return morph(compile(paths), weights);
};