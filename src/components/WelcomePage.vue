<template>
    <div class="bg-white px-2 py-2 lg:px-2">
        <div class="mx-auto max-w-6xl text-base leading-7 text-gray-700">
           <!--  <p class="text-base font-semibold leading-7 text-indigo-600">Welcome to Zap Stream</p>
            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h1> -->
            <div id="greeting" class="mt-2 mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></div>
            
            <p id="title-message" class="mb-8 text-md sm:text-xl "> </p>
            
            <div id="wistia-embed-container"> </div>
            
            <div class="flex items-center justify-center">
                <a href="https://zapstream.youcanbook.me/" target="_blank" rel="noopener noreferrer">
                    <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold m-6 py-3 sm:py-4 px-8 sm:px-12 rounded">
                        Schedule a Call
                    </button>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    // Add the Wistia external script
    const wistiaScript = document.createElement('script');
    wistiaScript.src = "https://fast.wistia.com/assets/external/E-v1.js";
    wistiaScript.async = true;
    document.head.appendChild(wistiaScript);

    // Get parameters from URL
    const urlParams = new URLSearchParams(window.location.search);
    const videoId = urlParams.get('hashid') || 'knp4jqqpnb'; // Default to 'knp4jqqpnb' if not provided
    const name = urlParams.get('name') || '[name]'; // Default to '[name]' if not provided
    const title = urlParams.get('title') || '[title]'; // Default to '[title]' if not provided

    // Update greeting
    document.getElementById('greeting').textContent = `Hello ${name}`;

    // Update title message
    document.getElementById('title-message').textContent = `Enjoy watching the video about ${title} just made for you automatically.`;

    // Create the Wistia embed code dynamically
    const container = document.getElementById('wistia-embed-container');
    container.innerHTML = `
        <div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;">
            <div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;">
                <div class="wistia_embed wistia_async_${videoId} seo=true videoFoam=true" style="height:100%;position:relative;width:100%">
                    <div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;">
                        <img src="https://fast.wistia.com/embed/medias/${videoId}/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" />
                    </div>
                </div>
            </div>
        </div>
    `;

    // Load the Wistia embed script for the specific video
    const script = document.createElement('script');
    script.src = `https://fast.wistia.com/embed/medias/${videoId}.jsonp`;
    script.async = true;
    document.head.appendChild(script);
});
</script>
