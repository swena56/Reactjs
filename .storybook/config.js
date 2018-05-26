import { configure } from '@storybook/react';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

function loadStories() {
    requireAll(require.context("..", true, /_story\.js?$/));
}

configure(loadStories, module);