import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function findMarkdownFiles(dir) {
    const files = await fs.readdir(dir);
    let mdFiles = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = await fs.stat(filePath);

        if (stats.isDirectory()) {
            mdFiles = mdFiles.concat(await findMarkdownFiles(filePath));
        } else if (file.endsWith('.md')) {
            mdFiles.push(filePath);
        }
    }

    return mdFiles;
}

function generateDefaultTitle(filePath) {
    const fileName = path.basename(filePath, '.md');
    return fileName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

function generateDefaultDescription(title) {
    return `Guide complet sur ${title.toLowerCase()}`;
}

async function fixFrontmatter(filePath) {
    try {
        let content = await fs.readFile(filePath, 'utf8');
        let modified = false;

        // Extraire le frontmatter
        const frontmatterMatch = content.match(/^---\s*\n([\s\S]*?)\n---/);
        
        if (!frontmatterMatch) {
            // Créer un nouveau frontmatter
            const defaultTitle = generateDefaultTitle(filePath);
            const defaultDescription = generateDefaultDescription(defaultTitle);
            const category = filePath.includes('seo') ? 'SEO' : 
                           filePath.includes('marketing') ? 'Marketing' :
                           filePath.includes('tech') ? 'Tech' : 'Général';
            
            const newFrontmatter = `---
title: "${defaultTitle}"
description: "${defaultDescription}"
pubDate: "2024-03-25"
category: "${category}"
author: "Web'Indé"
---

`;
            // Ajouter le frontmatter au début du contenu
            content = newFrontmatter + content.trimStart();
            await fs.writeFile(filePath, content, 'utf8');
            console.log(`✅ Nouveau frontmatter ajouté dans ${filePath}`);
            return;
        }

        const frontmatter = frontmatterMatch[1];
        let newFrontmatter = frontmatter;

        // Vérifier et corriger le format du title
        const titleMatch = frontmatter.match(/^title:\s*(.*)$/m);
        if (titleMatch) {
            const title = titleMatch[1].trim();
            if (!title.startsWith('"') || !title.endsWith('"')) {
                newFrontmatter = newFrontmatter.replace(
                    /^title:\s*(.*)$/m,
                    `title: "${title.replace(/^"|"$/g, '')}"`
                );
                modified = true;
            }
        } else {
            const defaultTitle = generateDefaultTitle(filePath);
            newFrontmatter += `\ntitle: "${defaultTitle}"`;
            modified = true;
        }

        // Vérifier et corriger le format de la description
        const descMatch = frontmatter.match(/^description:\s*(.*)$/m);
        if (descMatch) {
            const desc = descMatch[1].trim();
            if (!desc.startsWith('"') || !desc.endsWith('"')) {
                newFrontmatter = newFrontmatter.replace(
                    /^description:\s*(.*)$/m,
                    `description: "${desc.replace(/^"|"$/g, '')}"`
                );
                modified = true;
            }
        } else {
            const title = titleMatch ? titleMatch[1].trim().replace(/^"|"$/g, '') : generateDefaultTitle(filePath);
            const defaultDescription = generateDefaultDescription(title);
            newFrontmatter += `\ndescription: "${defaultDescription}"`;
            modified = true;
        }

        // Vérifier et ajouter la date si manquante
        if (!frontmatter.match(/^pubDate:/m)) {
            newFrontmatter += '\npubDate: "2024-03-25"';
            modified = true;
        }

        // Vérifier et ajouter la catégorie si manquante
        if (!frontmatter.match(/^category:/m)) {
            const category = filePath.includes('seo') ? 'SEO' : 
                           filePath.includes('marketing') ? 'Marketing' :
                           filePath.includes('tech') ? 'Tech' : 'Général';
            newFrontmatter += `\ncategory: "${category}"`;
            modified = true;
        }

        // Vérifier et ajouter l'auteur si manquant
        if (!frontmatter.match(/^author:/m)) {
            newFrontmatter += '\nauthor: "Web\'Indé"';
            modified = true;
        }

        // Si des modifications sont nécessaires, mettre à jour le fichier
        if (modified) {
            const newContent = content.replace(
                /^---\s*\n[\s\S]*?\n---/,
                `---\n${newFrontmatter}\n---`
            );
            await fs.writeFile(filePath, newContent, 'utf8');
            console.log(`✅ Frontmatter corrigé dans ${filePath}`);
        } else {
            console.log(`✅ Frontmatter déjà correct dans ${filePath}`);
        }
    } catch (error) {
        console.error(`❌ Erreur avec le fichier ${filePath}:`, error);
    }
}

async function main() {
    try {
        const contentDir = path.join(__dirname, 'src', 'content', 'docs');
        const mdFiles = await findMarkdownFiles(contentDir);
        console.log(`🔍 ${mdFiles.length} fichiers Markdown trouvés`);

        for (const file of mdFiles) {
            await fixFrontmatter(file);
        }
        
        console.log('✨ Traitement terminé');
    } catch (error) {
        console.error('❌ Erreur:', error);
    }
}

main(); 