<template>
    <div class="wrapper">
        <div class="search">
            <label for="search">Search</label>
            <input
             name="search"
             id="search"
             v-model=searchValue
             @input=handleInput
             />
        </div>
        <ul>
          <li v-for="item in results" :key="item.data[0].nasa_id">
            <img width=100 height=100 :src='item.links[0].href' />
          </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import { debounce } from 'lodash';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'Search',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line func-names
    handleInput: debounce(function () {
      axios.get(`${API}?q=${this.searchValue}&media_type=image`)
        .then((response) => {
          this.results = response.data.collection.items;
          console.log(this.results);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500),
  },
};
</script>

<style lang="scss" scoped>
    .wrapper{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 0;
        padding: 30px;
    }
    .search{
        width: 300px;
        display: flex;
        flex-direction: column;
        label{
            font-family: Montserrat, sans-serif;
        }
        input{
            height: 30px;
            border: none;
            border-bottom: 1px solid gray;
        }
    }
</style>
