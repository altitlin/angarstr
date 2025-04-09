declare module '*.css' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.scss' {
  const classes: Record<string, string>;
  export default classes;
}

declare module '*.webp' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}
