export class Init{
    load(){
        if(localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined){
            console.log('No Todos Found...Creating...');
            var todos = [
                {
                    text: 'Test Todo 1'
                },
                {
                    text: 'Test Todo 2'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        }  else {
            console.log('Found Todos...');
        }
    }
}