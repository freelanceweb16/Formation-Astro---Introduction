<div>
    <h2>Compteur</h2>
    <button on:click={() => {setCount(count - 1)}}>-</button>
    <input type="number" name="qty" id="qty" value={count} on:input={(e) => {setCount(e.target.value)}} />
    <button on:click={() => {setCount(count + 1)}}>+</button>


</div>

<script>
    let count = 0;
    const setCount = (newCount) => {
        if(newCount < 0) {
            count = 0;
        } else {
            count = newCount;
        }
    }
</script>