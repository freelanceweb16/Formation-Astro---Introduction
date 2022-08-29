export function post ({request}){
    const data = request.json();
    return new Response(JSON.stringify({
        success: `Bonjour ${data.firstname} ${data.lastname}`
    }), {
        status: 200,
        headers: {'content-type': 'application/json'}
    });
}