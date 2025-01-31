
let cartCantainer = document.querySelector('.container');
let overlay = document.querySelector('.overlay');

let icon = document.querySelector('.icon');
icon.addEventListener('click', () => {
    let card = overlay.querySelector('.box'); 
    if (card) card.remove(); 
    overlay.classList.add('hidden'); 
})


async function getData() {
    let response = await fetch('./data.json')
        .then((response) => {
            return response;
        })
        .then(response => {
            return response.json();
        })

    response.forEach(element => {
       
        let box = document.createElement('div');
        let box1 = document.createElement('div');
        let box2 = document.createElement('div');
        let box3 = document.createElement('div');
       
        box.classList.add('box', 'w-[31%]', 'h-full', 'bg-white','shadow-lg' ,'shadow-black/50','rounded')
        

        box1.classList.add('top', 'w-full', 'h-[10%]', 'flex', 'justify-between', 'items-center', 'p-6')
        let button_box1 = document.createElement('button');
         let h2_box1 = document.createElement('h2');
        
        button_box1.innerText = `${element.availability}`;
        button_box1.classList.add('px-6', 'py-2', 'bg-green-400/70', 'rounded-[2em]', 'font-medium')
       
        h2_box1.innerText = `$${element.cost_per_hour}/hr`;
        h2_box1.classList.add('text-base', 'font-medium');
        box1.appendChild(button_box1);
        box1.appendChild(h2_box1);

        box2.classList.add('middle-1', 'w-full', 'h-[75%]', 'flex', 'flex-col', 'justify-center', 'items-center', 'gap-2', 'px-8')

        let image_box2 = document.createElement('div');
        let h1_box2 = document.createElement('h1');
        let p1_box2 = document.createElement('p');
        let p2_box2 = document.createElement('p');
        let buttons = document.createElement('div');
        let h3_box2 = document.createElement('h3');

        image_box2.classList.add('image', 'w-30', 'h-30', 'bg-black/10', 'rounded-full', 'mb-6', 'flex', 'justify-center', 'items-center')
        box2.appendChild(image_box2);
        let h1_image = document.createElement('h1');
        let str = element.name;
        let fl = str[0],sl;
        for(let i=0;i<str.length;i++){
             if(str[i] === ' '){
                 sl = str[i+1];
                break;
             }
        }

        h1_image.innerText = `${fl}${sl}`;
        h1_image.classList.add('text-xl','font-semibold')
        image_box2.appendChild(h1_image);

        h1_box2.innerText = `${element.name}`;
        h1_box2.classList.add('text-xl', 'font-medium');
        box2.appendChild(h1_box2);

        p1_box2.innerText = `${element.designation}`;
        p1_box2.classList.add('text-[17px]');
        box2.appendChild(p1_box2);

        p2_box2.innerText = `${element.company}`;
        box2.appendChild(p2_box2);

        buttons.classList.add('buttons','middle-2' ,'my-4');
        let i=0;
        element.tech_stack.forEach(stack => {
           
        if(i<3){
            let btn1 = document.createElement('button');
            btn1.innerText = `${stack}`;
            btn1.classList.add('px-4','py-[0.4em]','border-2' ,'border-black/40','rounded-[2em]' ,'font-medium', 'my-2','mr-2')
            buttons.appendChild(btn1);
            i++;
        }
        
       });
       let btn1 = document.createElement('button');

       btn1.innerText = `+2`;
       btn1.classList.add('px-4','py-[0.4em]','bg-blue-400','rounded-[2em]' ,'font-medium')
       buttons.appendChild(btn1);

        box2.appendChild(buttons);

        h3_box2.innerText =  `${element.description}`;
        h3_box2.classList.add('text-center','text-base');
        box2.appendChild(h3_box2);

        box3.classList.add('bottom', 'w-full', 'h-[15%]', 'bg-blue-400/15', 'flex',  'justify-center', 'items-center', 'hover:bg-blue-400/70', 'text-lg' , 'transition','duration-700', 'linear' ,'py-6' ,'mt-4');
        let a =document.createElement('a');
        a.innerText = 'View Profile';

        box3.appendChild(a);

        box.appendChild(box1);
        box.appendChild(box2);
        box.appendChild(box3);
        cartCantainer.appendChild(box);
        // console.log(box);


        a.addEventListener('click',()=>{
            overlay.classList.remove('hidden');
            let clonedBox = box.cloneNode(true); 
            
            let bottom = clonedBox.querySelector('.bottom');
            bottom.remove();
            let buttons = clonedBox.querySelector('.buttons');
            buttons.innerHTML ='';

            element.tech_stack.forEach(stack => {
           
                    let btn1 = document.createElement('button');
                    btn1.innerText = `${stack}`;
                    btn1.classList.add('px-4','py-[0.4em]','border-2' ,'border-black/40','rounded-[2em]' ,'font-medium', 'my-2','mr-2')
                    buttons.appendChild(btn1);
                    i++;
                })
                
            let h1_box4 = document.createElement('h1');
            let p1_box4 = document.createElement('p');
            h1_box4.innerText =`${element.email}`;
            p1_box4.innerText = `${element.bio}`;

            h1_box4.classList.add('text-center','text-base' ,'text-xl','px-8', 'my-2');
            p1_box4.classList.add('text-center','text-base','px-8' ,'mb-8');

            clonedBox.appendChild(h1_box4);
            clonedBox.appendChild(p1_box4);
            
            overlay.appendChild(clonedBox);  
           
        });

    });

}


getData();


