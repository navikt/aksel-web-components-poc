import { HTMLAttributes } from "react";
import { JSX as LocalJSX } from "./loader";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] &
    Omit<HTMLAttributes<Element>, "className"> & {
      class?: string;
    };
};

declare global {
  export namespace JSX {
    interface IntrinsicElements
      extends StencilToReact<LocalJSX.IntrinsicElements> {}
  }
  interface HTMLElementTagNameMap extends LocalJSX.IntrinsicElements {}
}
