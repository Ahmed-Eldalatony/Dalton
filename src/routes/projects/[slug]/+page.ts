import { error } from '@sveltejs/kit';
import { projects } from '$lib/projects';

export function load({ params }) {
    // Find the project by matching the slug with the detailsLink
    const project = projects.find(p => p.detailsLink === `/projects/${params.slug}`);

    if (!project) {
        throw error(404, 'Project not found');
    }

    return {
        project
    };
}