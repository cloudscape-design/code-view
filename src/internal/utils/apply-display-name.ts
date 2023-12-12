export function applyDisplayName<T>(component: T, displayName: string): void {
  (component as any).displayName = displayName;
}
