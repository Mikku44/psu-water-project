// styles.d.ts
declare module '*.css' {
  // We don't need the actual content; we just need to satisfy the compiler.
  // This tells TypeScript that importing a .css file is fine.
  const content: any; 
  export default content;
}