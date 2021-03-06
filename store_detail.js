function goBack() {
    window.history.back();
}

function init() {
    var store_detail_json = localStorage.getItem('store_detail')
    var store_detail = JSON.parse(store_detail_json)
    var cont = document.getElementById('cont');

    const row_1 = document.createElement("div");
    row_1.classList.add("row")
    row_1.classList.add("btn-primary")

    const row_1_col_1 = document.createElement("div");
    const row_1_col_2 = document.createElement("div");
    row_1_col_1.classList.add("col-1")
    row_1_col_2.classList.add("col-6")


    var back_button = document.createElement("button");
    back_button.setAttribute('onclick', "goBack()");
    back_button.classList.add("btn")
    back_button.classList.add("btn-primary")
    back_button_name = document.createTextNode("<");
    back_button.appendChild(back_button_name);
    row_1_col_1.appendChild(back_button);
    var h_name = document.createElement("H1");
    var t_name = document.createTextNode(store_detail.nombresComercial ? store_detail.nombresComercial : "");
    h_name.appendChild(t_name);
    row_1_col_2.appendChild(h_name);

    row_1.appendChild(row_1_col_1);
    row_1.appendChild(row_1_col_2);
    cont.appendChild(row_1);

    const row_2 = document.createElement("div");
    row_2.classList.add("row")
    var p_adress = document.createElement("p");
    var t_adress = document.createTextNode(store_detail.direccion_Direccion ? store_detail.direccion_Direccion : "");
    p_adress.appendChild(t_adress);
    row_2.appendChild(p_adress);
    cont.appendChild(row_2);

    const row_3 = document.createElement("div");
    row_3.classList.add("row")
    var p_ref = document.createElement("p");
    var t_ref = document.createTextNode("N local: " + (store_detail.direccion_NroLocal ? store_detail.direccion_NroLocal : ""));
    p_ref.appendChild(t_ref);
    row_3.appendChild(p_ref);
    cont.appendChild(row_3);

    const row_4 = document.createElement("div");
    row_4.classList.add("row")
    var p_ref_2 = document.createElement("p");
    var t_ref_2 = document.createTextNode("Piso: " + (store_detail.direccionPiso ? store_detail.direccionPiso : ""));
    p_ref_2.appendChild(t_ref_2);
    row_4.appendChild(p_ref_2);
    cont.appendChild(row_4);

    const row_5 = document.createElement("div");
    row_5.classList.add("row")
    var p_ref_3 = document.createElement("p");
    var t_ref_3 = document.createTextNode("Referencia: " + (store_detail.direccion_Referencia ? store_detail.direccion_Referencia : ""));
    p_ref_3.appendChild(t_ref_3);
    row_5.appendChild(p_ref_3);
    cont.appendChild(row_5);

    const row_6 = document.createElement("div");
    row_6.classList.add("row")
    var p_timesheet = document.createElement("p");
    var t_timesheet = document.createTextNode("Horario: " + (store_detail.direccionHorario ? store_detail.direccionHorario : ""));
    p_timesheet.appendChild(t_timesheet);
    row_6.appendChild(p_timesheet);
    cont.appendChild(row_6);

    const row_7 = document.createElement("div");
    row_7.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Celular: " + (store_detail.sM_WhatsappId ? store_detail.sM_WhatsappId : ""));
    p_mobile.appendChild(t_mobile);
    row_7.appendChild(p_mobile);
    cont.appendChild(row_7);
    
    const row_8 = document.createElement("div");
    row_8.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Telefono: " + (store_detail.direccionTelefono ? store_detail.direccionTelefono : ""));
    p_mobile.appendChild(t_mobile);
    row_8.appendChild(p_mobile);
    cont.appendChild(row_8);
    /*
    const row_9 = document.createElement("div");
    row_9.classList.add("row")
    var p_mobile = document.createElement("p");
    var t_mobile = document.createTextNode("Celular: " + store_detail.mobile);
    p_mobile.appendChild(t_mobile);
    row_9.appendChild(p_mobile);
    cont.appendChild(row_9);
    */
    const row_10 = document.createElement("div");
    row_10.classList.add("row")
    const row_10_1 = document.createElement("div");
    row_10_1.classList.add("col")
    row_10_1.classList.add("text-center")
    var img_logo = document.createElement("img");
    img_logo.src = store_detail.logoUser;
    img_logo.classList.add("img-fluid")
    img_logo.classList.add("limit_img")
    img_logo.alt = "Responsive image"
    row_10.appendChild(img_logo);
    cont.appendChild(row_10);


    const row_11 = document.createElement("div");
    row_11.classList.add("row")
    const row_11_1 = document.createElement("div");
    row_11_1.classList.add("col")
    row_11_1.classList.add("text-center")
    var button_ar = document.createElement("a");
    button_ar.classList.add("btn")
    button_ar.classList.add("btn-primary")
    button_ar.classList.add("btn-lg")
    button_ar.classList.add("btn-block")
    var button_ar_text = document.createTextNode('Ir con Realidad Aumentada');
    button_ar.setAttribute('href', "./ardirection.html");
    button_ar.setAttribute('alt', "Responsive image");

    button_ar.appendChild(button_ar_text);
    row_11.appendChild(button_ar);
    cont.appendChild(row_11);
}