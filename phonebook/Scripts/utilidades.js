var Utilidades =
{
    tempoLoadMsg: null,
    idLoadElement: '#modalBackdrop',
    msgLoadList: "Carregando...",
    ajaxPreloadAuto: true,

    setup: function () {
        $(function () {
            //Aplica mascaras no sistema
            $(".mask-telefone,.mask-celular,.mask-fone").mask("(99) 9999-9999?9");
            $(".mask-data").mask("99/99/9999");
            $(".mask-data-hora").mask("99/99/9999 99:99");
            $(".mask-hora").mask("99:99");
            $(".mask-cpf").mask("999.999.999-99");
            $(".mask-cnpj").mask("99.999.999/9999-99");
            $(".mask-cep").mask("99.999-999");
            $(".mask-uf").mask("aa");
            $(".mask-ddd").mask("99");
            $(".mask-somente-telefone").mask("9999-9999?9");
            $('.mask-ano-ano').mask('9999/9999');
            $('.mask-cod').mask('999');

            //$(".numberDecimal2").spinner({
            //    step: 0.1,
            //    numberFormat: "n"
            //});

            //$(".numberDecimal1").spinner({
            //    step: 0.1,
            //    numberFormat: "n"
            //});


            //$(".numberDecimal0").spinner({
            //    step: 1,
            //    numberFormat: "n"
            //});

            // Aplica somente numeros no campo
            $('somente-numeros').bind("keyup blur focus", function (e) {
                e.preventDefault();
                var expre = /[^0-9]/g;
                if ($(this).val().match(expre))
                    $(this).val($(this).val().replace(expre, ''));
            });

            $('.mask-peso').priceFormat({
                prefix: '',
                centsSeparator: '.',
                centsLimit: 3,
                thousandsSeparator: ''
            });

            $('.mask-altura').priceFormat({
                prefix: '',
                centsLimit: 2,
                limit: 3,
                centsSeparator: '.',
                thousandsSeparator: ''
            });

            // Aplica mascara de moeda
            $('.moeda').priceFormat({
                prefix: 'R$ ',
                centsSeparator: ',',
                thousandsSeparator: '.'
            });

            $('.numberDecimal1').priceFormat({
                centsLimit: 1,
                prefix: '',
                centsSeparator: '.',
                thousandsSeparator: ''
            });

            //$("input[plugin='calendar']").datepicker({
            //});

            //$(".calendario").datepicker({
            //});

            //$(".dataHora").datetimepicker({
            //    language: 'pt-BR'
            //});

            // Para os botoes cancelar iremos aplicar o voltar para a tela anterior
            $('.cancelarBtn').click(function () {
                window.history.go(-1);
            });

            //$("a[rel='tooltip']").tooltip({
            //    trigger: 'hover',
            //    placement: 'bottom'
            //});

            $('.modal').addClass('hide fade');

            $('.btn-minimize').click(function (e) {
                e.preventDefault();
                var $target = $(this).parent().parent().next('.box-content');
                if ($target.is(':visible')) $('i', $(this)).removeClass('icon-chevron-up').addClass('icon-chevron-down');
                else $('i', $(this)).removeClass('icon-chevron-down').addClass('icon-chevron-up');
                $target.slideToggle();
            });

        });
    },

    alerta: function (mensagem, callback) {
        var okButtonTxt = "Ok";
        var confirmModal = $('<div class="modal hide fade">' + 
            '<div class="modal-body">' +
                '<a class="close" data-dismiss="modal" >&times;</a>' +
                '<p>' + mensagem + '</p>' +
            '</div>' +
                '<div class="modal-footer">' +
                    '<center><a href="#" id="okButton" class="btn btn-primary">' +
                    okButtonTxt +
                            '</a>' +
                    '</center>' +
                '</div>' +
            '</div>');

        confirmModal.find('#okButton').click(function (event) {

            if (callback != undefined) {
                callback();
            }

            confirmModal.modal('hide');
        });

        confirmModal.modal("show").appendTo("body");

    },

    confirma: function (mensagem, callback, cancelAction) {
        var heading = "";
        var cancelbuttontxt = 'cancelar';
        var okbuttontxt = 'confirmar';
        var confirmmodal = $('<div class="modal fade">' +
            '<div class="modal-header hide">' +
            '<h3>' + heading + '</h3>' +
            '</div>' +
            '<div class="modal-body">' +
            '<a class="close" data-dismiss="modal" >&times;</a>' +
            '<p>' + mensagem + '</p>' +
            '</div>' +
            '<div class="modal-footer">' +
            '<a href="#" id="cancelbutton" class="btn btn-danger" data-dismiss="modal">' +
            cancelbuttontxt +
            '</a>' +
            '<a href="#" id="okbutton" class="btn btn-primary">' +
            okbuttontxt +
            '</a>' +
            '</div>' +
            '</div>');
        
        confirmModal.find('#okButton').click(function (event) {
            callback();
            confirmModal.modal('hide');
        });

        confirmModal.find('#cancelButton').click(function (event) {
            if (!(cancelAction == undefined)) {
                cancelAction();
            }
            confirmModal.modal('hide');
        });

        confirmModal.modal('show').appendTo('body');
    }
}

    /**
     * Inicializa todas as acoes padroes
     **/

    
//    validaEmail: function (email) {
//        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
//            return false;
//        return true;
//    }

//    isCpf: function (cpf) {
//        var numeros, digitos, soma, i, resultado, digitos_iguais;

//        cpf = cpf.replace(/[.-]/g, '');

//        digitos_iguais = 1;
//        if (cpf.length < 11)
//            return false;
//        for (i = 0; i < cpf.length - 1; i++)
//            if (cpf.charAt(i) != cpf.charAt(i + 1)) {
//                digitos_iguais = 0;
//                break;
//            }
//        if (!digitos_iguais) {
//            numeros = cpf.substring(0, 9);
//            digitos = cpf.substring(9);
//            soma = 0;
//            for (i = 10; i > 1; i--)
//                soma += numeros.charAt(10 - i) * i;
//            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//            if (resultado != digitos.charAt(0))
//                return false;
//            numeros = cpf.substring(0, 10);
//            soma = 0;
//            for (i = 11; i > 1; i--)
//                soma += numeros.charAt(11 - i) * i;
//            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
//            if (resultado != digitos.charAt(1))
//                return false;
//            return true;
//        } else
//            return false;
//    },

//    isCnpj: function (cnpj) {
//        cnpj = cnpj.replace(/[.\-\/]/g, "");

//        if (cnpj == '00000000000000')
//            return false;

//        if (cnpj.length != 14)
//            return false;

//        var dv = cnpj.substr(cnpj.length - 2, cnpj.length);
//        cnpj = cnpj.substr(0, 12);
//        /*calcular 1º dígito verificador*/
//        var soma;
//        soma = cnpj[0] * 6;
//        soma += cnpj[1] * 7;
//        soma += cnpj[2] * 8;
//        soma += cnpj[3] * 9;
//        soma += cnpj[4] * 2;
//        soma += cnpj[5] * 3;
//        soma += cnpj[6] * 4;
//        soma += cnpj[7] * 5;
//        soma += cnpj[8] * 6;
//        soma += cnpj[9] * 7;
//        soma += cnpj[10] * 8;
//        soma += cnpj[11] * 9;
//        var dv1 = soma % 11;
//        if (dv1 == 10) {
//            dv1 = 0;
//        }
//        /*calcular 2º dígito verificador*/
//        soma = cnpj[0] * 5;
//        soma += cnpj[1] * 6;
//        soma += cnpj[2] * 7;
//        soma += cnpj[3] * 8;
//        soma += cnpj[4] * 9;
//        soma += cnpj[5] * 2;
//        soma += cnpj[6] * 3;
//        soma += cnpj[7] * 4;
//        soma += cnpj[8] * 5;
//        soma += cnpj[9] * 6;
//        soma += cnpj[10] * 7;
//        soma += cnpj[11] * 8;
//        soma += dv1 * 9;
//        var dv2 = soma % 11;
//        if (dv2 == 10) {
//            dv2 = 0;
//        }
//        var digito = dv1 + "" + dv2;
//        if (dv == digito) { /*compara o dv digitado ao dv calculado*/
//            return true;
//        } else {
//            return false;
//        }

//    },

//    novaJanela: function (url, tituloJanela, largura, altura) {
//        var titulo = tituloJanela ? tituloJanela : Itarget.lang.tituloJanelas.recibo;
//        var esquerda = (screen.width - largura) / 2;
//        var topo = (screen.height - altura) / 2;

//        if (largura != undefined && largura > 0 && altura != undefined && altura > 0) {
//            window.open(url, titulo, 'height=' + altura + ', width=' + largura + ', top=' + topo + ', left=' + esquerda);
//        } else {
//            window.open(url, titulo, "");
//        }
//    },

//    criaElemento: function (id, tag) {
//        if (!$("#" + id).is(tag)) {
//            var elemento = document.createElement(tag);
//            elemento.id = id;
//            $("body").append(elemento);
//        }
//    },

//    chamaLoad: function (msg) {
//        if (!$(Utilidades.idLoadElement).is('div'))
//            Utilidades.criaElemento(Utilidades.idLoadElement.replace('#', ''), 'div');

//        msg = (!msg || msg == '') ? "Carregando..." : msg;

//        $(Utilidades.idLoadElement).addClass('modal-backdrop').addClass('overall').addClass('fade').addClass('in');


//        $(Utilidades.idLoadElement).html("<h1>" + msg + "</h1>").click(function () {
//            return false;
//        });
//    },

//    fechaLoad: function () {
//        $(Utilidades.idLoadElement).fadeOut(function () {
//            $(this).remove();
//        });
//    },

//    /**
//     * Retorna o numero do argumento maior ou zero se forem iguais
//     */
//    checaMaiorData: function (data1, data2) {
//        function minhaData(data) {
//            this.d = data.substr(0, 2);
//            this.M = data.substr(3, 2);
//            this.y = data.substr(6, 4);
//            this.h = data.substr(11, 2);
//            this.m = data.substr(14, 2);
//            this.s = data.substr(17, 2);
//            this.toString = function () {
//                return this.d + '/' + this.M + '/' + this.y + ' ' + this.h + ':' + this.m + ':' + this.s
//            };
//            this.toStringCompare = function () {
//                return this.y + '' + this.M + '' + this.d + '' + this.h + '' + this.m + '' + this.s
//            }
//        }

//        result = ((new minhaData(data1)).toStringCompare() * 1) - ((new minhaData(data2)).toStringCompare() * 1)
//        if (result > 0)
//            return 1;
//        if (result < 0)
//            return 2;
//        return 0;

//    },

//    activeInputTabs: function () {
//        $('.nav-tabs a').on('click', function (e) {
//            input = $($(this).attr('href')).find('input[type!=hidden]')[0];
//            inputArea = $($(this).attr('href')).find('textarea');
//            if (input != undefined) {
//                setTimeout(function () {
//                    $(input).focus();
//                }, 100);
//            } else if (inputArea != undefined) {
//                setTimeout(function () {
//                    $(inputArea).focus();
//                }, 100);
//            }
//            return false;
//        });
//    },

//    diferencaMes: function (dataMenor, dataMaior) {
//        dMenorDia = dataMenor.substr(0, 2);
//        dMenorMes = dataMenor.substr(3, 2);
//        dMenorAno = dataMenor.substr(6, 4);

//        dMaiorDia = dataMaior.substr(0, 2);
//        dMaiorMes = dataMaior.substr(3, 2);
//        dMaiorAno = dataMaior.substr(6, 4);
//        if (dMaiorAno == dMenorAno && dMaiorMes == dMenorMes) {
//            return 0;
//        }
//        mes = 0;
//        if (dMaiorDia > dMenorDia) {
//            mes = 0;
//        } else {
//            mes = 1;
//        }

//        if (dMaiorAno > dMenorAno) {
//            aux = 0;
//            if ((dMaiorAno - dMenorAno) > 1) {
//                aux = ((dMaiorAno - dMenorAno - 1) * 12);
//            }

//            if (dMaiorDia > dMenorDia) {
//                mes = 2;
//                result = (12 - (dMenorMes * 1)) + 1;
//            } else {
//                mes = 1;
//                result = (12 - (dMenorMes * 1)) - 1;
//            }

//            result = (dMaiorMes * 1) + result + 1;
//            return result + aux - mes;
//        }

//        result = (dMaiorMes * 1) - (dMenorMes * 1) - mes;
//        return result;
//    },

//    difMesEntreDatas: function ($data1, $data2) {
//        $d1 = explode("/", $data1);
//        $d2 = explode("/", $data2);

//        $result = ($d2[2] - $d1[2]) * 12;
//        if ($d1[1] > $d2[1]) {
//            $result -= ($d1[1] - $d2[1]);
//        } else if ($d2[1] > $d1[1]) {
//            $result += ($d2[1] - $d1[1]);
//        }

//        if ($d1[0] > $d2[0] && $d1[1] < $d2[1]) {
//            $result -= 1;
//        }

//        return $result;
//    },

//    number_format: function (number, decimals, dec_point, thousands_sep) {
//        // *     example 1: number_format(1234.56);
//        // *     returns 1: '1,235'
//        // *     example 2: number_format(1234.56, 2, ',', ' ');
//        // *     returns 2: '1 234,56'
//        // *     example 3: number_format(1234.5678, 2, '.', '');
//        // *     returns 3: '1234.57'
//        // *     example 4: number_format(67, 2, ',', '.');
//        // *     returns 4: '67,00'
//        // *     example 5: number_format(1000);
//        // *     returns 5: '1,000'
//        // *     example 6: number_format(67.311, 2);
//        // *     returns 6: '67.31'
//        // *     example 7: number_format(1000.55, 1);
//        // *     returns 7: '1,000.6'
//        // *     example 8: number_format(67000, 5, ',', '.');
//        // *     returns 8: '67.000,00000'
//        // *     example 9: number_format(0.9, 0);
//        // *     returns 9: '1'
//        // *    example 10: number_format('1.20', 2);
//        // *    returns 10: '1.20'
//        // *    example 11: number_format('1.20', 4);
//        // *    returns 11: '1.2000'
//        // *    example 12: number_format('1.2000', 3);
//        // *    returns 12: '1.200'
//        // *    example 13: number_format('1 000,50', 2, '.', ' ');
//        // *    returns 13: '100 050.00'
//        // Strip all characters but numerical ones.
//        number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
//        var n = !isFinite(+number) ? 0 : +number,
//        prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
//        sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
//        dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
//        s = '',
//        toFixedFix = function (n, prec) {
//            var k = Math.pow(10, prec);
//            return '' + Math.round(n * k) / k;
//        };
//        // Fix for IE parseFloat(0.55).toFixed(0) = 0;
//        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
//        if (s[0].length > 3) {
//            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
//        }
//        if ((s[1] || '').length < prec) {
//            s[1] = s[1] || '';
//            s[1] += new Array(prec - s[1].length + 1).join('0');
//        }
//        return s.join(dec);
//    },

//    alertaDialogo: function (title, callback) {
//        var okButtonTxt = 'Ok';
//        var confirmModal = $('<div class="modal hide fade">' +
//            '<div class="modal-header">' +
//            '<a class="close" data-dismiss="modal" >&times;</a>' +
//            '<h3>' + title + '</h3>' +
//            '</div>' +
//            '<div class="modal-body">' +
//            '<input style="width:98%" type="text" id="resultDialog" value=""/>' +
//            '</div>' +
//            '<div class="modal-footer">' +
//            '<center><a href="#" id="okButton" class="btn btn-primary">' +
//            okButtonTxt +
//            '</a></center>' +
//            '</div>' +
//            '</div>');

//        confirmModal.find('#okButton').click(function (event) {
//            callback();
//            confirmModal.remove();
//        });

//        confirmModal.modal('show').appendTo('body');

//    },

//    validaElementoForm: function (elemento, msg, params) {
//        if (!elemento)
//            return false;

//        if (!$(elemento).val()) {
//            Utilidades.alerta(msg, function () {
//                if (params && params.focus) {
//                    $(params.focus).focus();
//                } else {
//                    $(elemento).focus();
//                }
//            });
//            return false;
//        }

//        return true;
//    }
//}

//function explode(delimiter, string, limit) {

//    if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
//    if (delimiter === '' || delimiter === false || delimiter === null) return false;
//    if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string === 'object') {
//        return {
//            0: ''
//        };
//    }
//    if (delimiter === true) delimiter = '1';

//    // Here we go...
//    delimiter += '';
//    string += '';

//    var s = string.split(delimiter);


//    if (typeof limit === 'undefined') return s;

//    // Support for limit
//    if (limit === 0) limit = 1;

//    // Positive limit
//    if (limit > 0) {
//        if (limit >= s.length) return s;
//        return s.slice(0, limit - 1).concat([s.slice(limit - 1).join(delimiter)]);
//    }

//    // Negative limit
//    if (-limit >= s.length) return [];

//    s.splice(s.length + limit);
//    return s;



///////////////////////////////////////
///             LIXEIRA             ///
///////////////////////////////////////

//            $('form input, form select').keyup(function(e){
//                var code = (e.keyCode ? e.keyCode : e.which);
//                //Enter
//                if(code == 13) {
//                    $(this).parents('form').submit();
//                }
//            });