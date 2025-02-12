/**
 * Normalise un tag en :
 * - Convertissant en minuscules
 * - Supprimant les accents
 * - Remplaçant les espaces par des tirets
 * - Remplaçant les slashes par des tirets
 */
export function normalizeTag(tag: string): string {
    return tag
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Supprime les accents
        .replace(/[^a-z0-9-]/g, '-') // Remplace tout ce qui n'est pas alphanumérique par des tirets
        .replace(/-+/g, '-') // Remplace les séquences de tirets par un seul tiret
        .replace(/^-|-$/g, ''); // Supprime les tirets au début et à la fin
} 