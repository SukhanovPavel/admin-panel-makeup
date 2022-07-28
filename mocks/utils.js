function filter(products, status) {
    return  JSON.stringify(
            Object.assign(
            Array.from( 
            JSON.parse(products) )
            .sort( (a, b) => a.status == b.status ) ) );
}