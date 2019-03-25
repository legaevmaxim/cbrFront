<template>
  <vue-virtual-table
    :config="tableConfig"
    :data="tableData"
    :height="800"
  >
  </vue-virtual-table>
</template>

<script>
import VueVirtualTable from 'vue-virtual-table'


export default {
  components: {
    VueVirtualTable
  },
  data() {
    return {
      tableConfig: [
        {prop: 'Vname', name:'Название валюты' },
        {prop: 'Vnom', name:'Номинал'},
        {prop: 'Vcurs', name:'Курс'},
        {prop: 'VchCode', name:'Символьный код'}
      ]
    }
  },
  computed: {
    tableData() {
      
      return this.$store.state.currencyArray;
    }
  }
}
</script>