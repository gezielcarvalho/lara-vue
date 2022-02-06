<template>
    <div>
        <h3 class="text-center">Edit Airline</h3>
        <div class="row">
            <div class="col-md-6">
                <form @submit.prevent="updateAirline">
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
                    <button type="submit" class="btn btn-primary">Update</button>
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
        created() {
            this.axios
                .get(`http://localhost:8000/api/airlines/${this.$route.params.id}`)
                .then((res) => {
                    this.airline = res.data;
                });
        },
        methods: {
            updateAirline() {
                this.axios
                    .patch(`http://localhost:8000/api/airlines/${this.$route.params.id}`, this.airline)
                    .then((res) => {
                        this.$router.push({ name: 'home' });
                    });
            }
        }
    }
</script>