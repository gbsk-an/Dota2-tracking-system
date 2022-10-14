<template>
    <Nav />
    <div class="wrapper-grid team-page">
        <div class="team-page_title">
            <h1>Список команд</h1>
        </div>
        <p>Многоцелевое свойство, которое определяет, как элемент должен быть показан в документе.

            Применяется ко: всем элементам.
            
            grid
            формирует сетку как блок.
            inline-grid
            формирует сетку как строчный блок.
            subgrid
            если ваш контейнер это ещё и элемент (вложенная сетка), то вы можете использовать это свойство для обозначения того, чтобы размеры строк/колонок были взяты из родительского элемента, а не определяли собственный</p>
    </div>
    <Footer />
</template>

<script>
import Nav from '@/components/Nav.vue';
import Footer from '@/components/Footer.vue';
export default {
    name: 'team-page',
    components: {
    Nav,
    Footer
},
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
.team-page {
width: 100%;
    &_title {
        grid-column: 3 / span 4;
    }
}
</style>