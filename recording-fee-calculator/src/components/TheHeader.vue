<template>
    <header>
        <h2>Recording Fee Calculator</h2>
        <h3>Lancaster County, PA</h3>
    </header>
</template>

<style scoped>
.header-container {
    position: relative;
    text-align: center;
    color: #fff;
}
.header-img {
    opacity: 0.3;
    height: 400px;
    width: 100%;
}
.header-text {
    font-family: 'Red Hat Mono', monospace;
    font-size: 40px;
    color: #000;
}
h1 {
    position: absolute;
    bottom: 8px;
    left: 16px;
    opacity: 1;
    color: #000;
}

@media only screen and (max-width: 480px) {

    .header-container, footer {
    width: 100%;
    min-height: 200px;
    overflow: visible;
    }
    .header-img {
    max-height: 100%;
    }
    .header-text {
    min-width: 450px;
    }
    h1 {
    font-size: 2em;
    }
}
</style>