<template>
    <div>
        <h3 class="text-center">Create Airline</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="addAirline">
                    <div class="form-group">
                        <label>Name</label>
                        <input type="text" class="form-control" v-model="airline.airline_name">
                    </div>
                    <div class="form-group">
                        <label>Code</label>
                        <input type="text" class="form-control" v-model="airline.iata_code">
                    </div>
                    <div class="form-group">
                        <label>Country</label>
                        <input type="text" class="form-control" v-model="airline.country">
                    </div>                    
                    <button type="submit" class="btn btn-primary">Create</button>
                </form>
            </div>
        </div>
    </div>
</template>
 
<script>
    export default {
        data() {
            return {
                airline: {}
            }
        },
        methods: {
            addAirline() {
                this.axios
                    .post('http://localhost:8000/api/airlines', this.airline)
                    .then(response => (
                        this.$router.push({ name: 'home' })
                    ))
                    .catch(err => console.log(err))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>