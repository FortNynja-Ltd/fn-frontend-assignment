<template>
  <div id="app">
    <div class="fn-container">
      <div class="fn-logo-wrapper">
        <img alt="FortNynja" src="./assets/fn-logo.svg" class="fn-logo" />
      </div>
      <h2>FortNynja Frontend Assignment</h2>
      <p>See the README file for assignment requirements.</p>

      <ScanReport :id="report.id" class="scan-report" />
    </div>
  </div>
</template>

<script>
import ScanReport from './components/ScanReport.vue'
export default {
  name: 'App',
  components: {
    ScanReport,
  },
  data: () => ({
    report: {
      id: 'Retrieve report data from API',
    },
  }),
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style scoped>
.fn-logo-wrapper {
  margin-bottom: 30px;
}
.fn-logo {
  max-width: 150px;
  height: auto;
}
.fn-container {
  max-width: 960px;
  margin: auto;
}
/** Remove these styles when done */
.scan-report {
  margin-top: 24px;
  border: 2px dashed red;
  padding: 16px;
  list-style: none;
}
</style>
