
export function showTouit(timestamp, param){
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/list?ts=" + encodeURIComponent(timestamp), true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.response);
                    param(recuperation);
                    }
                } else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        )
    request.send();
}

export function showTrending(param){
    const request = new XMLHttpRequest();
    request.open("GET", "    http://touiteur.cefim-formation.org/trending", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.response);
                    param(recuperation);
                    }
                } else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        )
    request.send();
}

export function sendTouit(name, message, onSucces, onError){
    const request = new XMLHttpRequest();
    request.open("POST", "http://touiteur.cefim-formation.org/send", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.responseText);
                    if (recuperation.hasOwnProperty("success")){
                        onSucces()
                    }
                    else if(recuperation.hasOwnProperty("error")){
                        onError(recuperation.error)
                    }
                    else{
                        //
                    }
                }
                else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        }
    )
    request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    request.send("name=" + encodeURIComponent(name) + "&message=" + encodeURIComponent(message));
}

export function showComments(id, param){
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/comments/list?message_id=" + id, true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    const recuperation = JSON.parse(request.response);
                    param(recuperation.comments);
                } else {
                    <p>"ERREUR : Pas de commentaire"</p>;
                }
            }
        }
    )
    request.send();
};

export function sendComment(id, name, message, onSucces, onError){
    const request = new XMLHttpRequest();
    request.open("POST", "http://touiteur.cefim-formation.org/comments/send", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.responseText);
                    if (recuperation.hasOwnProperty("success")){
                        onSucces()
                    }
                    else if(recuperation.hasOwnProperty("error")){
                        onError(recuperation.error)
                    }
                    else{
                        //
                    }
                }
                else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        }
    )
    request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    request.send(
        "message_id=" + encodeURIComponent(id) + 
        "&name=" + encodeURIComponent(name) + 
        "&comment=" + encodeURIComponent(message)
    );
}

export function sendLike(id, onSucces, onError){
    const request = new XMLHttpRequest();
    request.open("PUT", " http://touiteur.cefim-formation.org/likes/send", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.responseText);
                    if (recuperation.hasOwnProperty("success")){
                        onSucces()
                    }
                    else if(recuperation.hasOwnProperty("error")){
                        onError(recuperation.error)
                    }
                    else{
                        //
                    }
                }
                else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        }
    )
    request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    request.send("message_id=" + encodeURIComponent(id));
}

export function refreshLike(id, param){
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/get?id=" + encodeURIComponent(id), true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.response);
                    param(recuperation.data);
                    }
                } else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        )
    request.send(); 
}

export function sendDislike(id, onSucces, onError){
    const request = new XMLHttpRequest();
    request.open("DELETE", "http://touiteur.cefim-formation.org/likes/remove", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.responseText);
                    if (recuperation.hasOwnProperty("success")){
                        onSucces()
                    }
                    else if(recuperation.hasOwnProperty("error")){
                        onError(recuperation.error)
                    }
                    else{
                        //
                    }
                }
                else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        }
    )
    request.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    request.send("message_id=" + encodeURIComponent(id));  
}

export function showInfluenceurs(param){
    const request = new XMLHttpRequest();
    request.open("GET", "http://touiteur.cefim-formation.org/influencers?count=5", true);
    request.addEventListener(
        'readystatechange', function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) { 
                    const recuperation = JSON.parse(request.response);
                    param(recuperation.influencers);
                    }
                } else {
                    <p>"ERREUR : Pas de touit"</p>
                }
            }
        )
    request.send();
}
