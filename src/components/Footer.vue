<template>
    <footer class="footer-container">
        <div class="footer-container_logo">
            <p>2022© OpenDota</p>
        </div>
        <div class="footer-container_about">
            <ul class="footer-container_about-navigation">
                <li class="footer-container_about-navigation-item">
                    <a href="#">
                        О нас
                    </a>
                </li>
                <li class="footer-container_about-navigation-item">
                    <a href="#">
                        Политика конфидициальности
                    </a>
                </li>
                <li class="footer-container_about-navigation-item">
                    <a href="#">
                        Документация API
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footer-default',
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.footer-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1.5em 5em;
    background-color: var(--dark-violet);
    @media (max-width: 320px) {
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        padding: .6em 0;
        gap: 1.25em;
    } 
    &_about {
        &-navigation {
            display: flex;
            gap: 2.5em;
            list-style: none; 
            @media (max-width: 320px) {
                flex-direction: column;
                align-items: center;
                flex-wrap: wrap;
                gap: .3em;
            } 
            &-item {
                color: var(--brightest-violet);
	            font-family: var(--font);
                font-weight: 500;
                font-size: 16px;
                line-height: 19px;
            }           
        }
    }
}
</style>