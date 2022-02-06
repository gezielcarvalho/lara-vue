<template>
    <div>
        <h2 class="text-center">Airlines List</h2>
        <router-link :to="{name: 'create'}" class="btn btn-success">Create</router-link>
        <table class="table">
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Code</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="airline in airlines" :key="airline.id">
                <td>{{ airline.id }}</td>
                <td>{{ airline.airline_name }}</td>
                <td>{{ airline.iata_code }}</td>
                <td>
                    <div class="btn-group" role="group">
                        <router-link :to="{name: 'edit', params: { id: airline.id }}" class="btn btn-success">Edit</router-link>
                        <button class="btn btn-danger" @click="deleteAirline(airline.id)">Delete</button>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                airlines: []
            }
        },
        created() {
            this.axios
                .get('http://localhost:8000/api/airlines/')
                .then(response => {
                    this.airlines = response.data;
                });
        },
        methods: {
            deleteAirline(id) { 
                this.axios
                    .delete(`http://localhost:8000/api/airlines/${id}`)
                    .then(response => {
                        let i = this.airlines.map(data => data.id).indexOf(id);
                        this.airlines.splice(i, 1)
                    });
            }
        }
    }
</script>