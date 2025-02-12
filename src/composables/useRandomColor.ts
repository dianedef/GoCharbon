import { computed, ref, onMounted, onUnmounted } from 'vue';
import colors from '../components/config/colors.json';

export interface ColorProps {
    color?: string;
    darkColor?: string;
    content?: string;
}

export function useRandomColor(props?: ColorProps) {
    const isDarkTheme = ref(false);

    function hashString(str: string): number {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash;
        }
        return Math.abs(hash);
    }

    function getRandomColor(isDark = false, seed?: string): string {
        const colorArray = isDark ? colors.dark : colors.light;
        if (seed) {
            const hash = hashString(seed);
            return colorArray[hash % colorArray.length];
        }
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    // Valeurs réactives pour les couleurs
    const randomColor = computed(() => {
        if (props?.color) return props.color;
        return getRandomColor(false, props?.content);
    });
    
    const randomDarkColor = computed(() => {
        if (props?.darkColor) return props.darkColor;
        return getRandomColor(true, props?.content);
    });
    
    const currentColor = computed(() => isDarkTheme.value ? randomDarkColor.value : randomColor.value);

    // Pour la gestion des couleurs sélectionnées
    const selectedColor = computed(() => {
        if (!props?.content) return null;
        return isDarkTheme.value ? randomDarkColor.value : randomColor.value;
    });

    function updateSelectedColor(color: string | null) {
        selectedColor.value = color;
    }

    function checkDarkTheme() {
        if (typeof document !== 'undefined') {
            isDarkTheme.value = document.documentElement.classList.contains('dark');
        }
    }

    // Observer pour le thème
    let observer: MutationObserver | null = null;

    onMounted(() => {
        checkDarkTheme();
        
        if (typeof document !== 'undefined' && typeof MutationObserver !== 'undefined') {
            observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.target instanceof HTMLElement && 
                        mutation.attributeName === 'class') {
                        checkDarkTheme();
                    }
                });
            });

            observer.observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['class']
            });
        }
    });

    onUnmounted(() => {
        if (observer) {
            observer.disconnect();
        }
    });

    return {
        randomColor,
        randomDarkColor,
        currentColor,
        selectedColor,
        updateSelectedColor,
        getRandomColor,
        isDarkTheme
    };
} 