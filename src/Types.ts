import Entity from "./Entity";
import System from "./System";
import Component from "./Component";

export type id = string;
export type entities = Map<string, Entity>;
export type systems = Map<string, System>;
export type components = Map<string, Component>;
