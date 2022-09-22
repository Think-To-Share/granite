<template>
    <!-- <div class="granite-card-header">Sink Info</div> -->
    <div class="card text-start sink-card mb-5">
      <div class="card-body">
        <h4 class="card-title granite-card-header">Please Choose</h4>
        <div class="row justify-content-center align-items-center g-2">
            <div class="col">
                <div class="card text-start">
                    <div class="card-header granite-sub-card-header">
                        Unpolished Cut Outs
                    </div>
                    <img class=" granite-card-top-img" src="@/assets/images/unpolished-cut-outs.jpg" alt="Title">
                    <div class="card-body">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-start">
                    <div class="card-header granite-sub-card-header">
                        Polished Cut Outs
                    </div>
                    <img class=" granite-card-top-img" src="@/assets/images/polished-cut-outs.jpg" alt="Title">
                    <div class="card-body">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Choose</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card text-start">
                    <div class="card-header granite-sub-card-header">
                        Drainer Grooves
                    </div>
                    <img class=" granite-card-top-img" src="@/assets/images/drainer-grooves.jpg" alt="Title">
                    <div class="card-body">
                        <select class="form-select" aria-label="Default select example">
                            <option value="No" selected>No</option>
                            <option value="Yes">Yes</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .sink-card{
        box-shadow: 0px 1px 5px 1px rgb(209 207 207 / 85%);
        border-radius: 0%;
        border: none;
        margin: 10;
        .granite-card-header{
            font-family: var(--primary-font);
            color:#3C7C8E;
        }
        
        .granite-card-top-img
        {
            border-radius: none !important;
        }
        .granite-sub-card-header{
            background-color: #fff;
            border-bottom: none;
            color: #3C7C8E;
        }
    }
    
</style>
