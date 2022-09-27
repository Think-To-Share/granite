<template>
    <div>
        <div class="card project-type-main">
            <div class="project-type">
                <img src="@/assets/images/icon-kitchen-worktops-selected.png" alt="Kitchen worktops" width="66" height="44" class="kitchen-worktops">
                <h5 class="kitchen-worktops-heading">Kitchen Worktops</h5>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "rfs/scss";

.card{
    width: 100%;
    box-shadow: 0px 1px 5px 1px #d1cfcfd9;
    padding: 45px 35px;
    margin-bottom: 25px;
    border: none;
    .project-type{
        background-color: #3c7c8e;
        width: 25%;
        padding: 47px 10px;
        border-radius: 10px;
        .kitchen-worktops{
            display: flex;
            margin: 0 auto;
        }
        .kitchen-worktops-heading{
            text-align: center;
            color: #fff;
            font-family: var(--primary-font);
            font-weight: 400;
            margin-top: 15px;
            margin-bottom: 0;
            @include font-size(1.3rem);
        }
    }
}
</style>
