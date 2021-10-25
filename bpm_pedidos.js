// ==UserScript==
// @name         Pedidos NC Sistemas (Alterado)
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Pedidos NC Sistemas
// @author       Wagner Felipe Leszkiewicz
// @match        https://platform.senior.com.br/ecm-frontend/*
// @icon         https://www.google.com/s2/favicons?domain=senior.com.br
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
// @grant        none
// ==/UserScript==

(function() {

    'use strict';

    const setInitialValue = (element, value = 0) => {
        var el = $(`input[id^='${element}']`);
        el.val(value);

        el.each(function() {

            angular.element($(this)).triggerHandler('focus');
            angular.element($(this)).triggerHandler('input');
            angular.element($(this)).triggerHandler('change');
            angular.element($(this)).triggerHandler('blur');

        })

    }

    $(document).ready(function(){

        $(document).on('change','#tipo_cliente', () => {

            setInitialValue('qt_horas_modulo_');
            setInitialValue('atst_modulo_');
            setInitialValue('cdu_modulo_');
            setInitialValue('qte_colaboradores_modulo_');
            setInitialValue('valor_de_desconto_concedido');
            setInitialValue('parcela_');


        })

    });



})();
