$(document).ready(function(){

    /*
     * Cache/Affiche les etapes validées
     */
    function hideStep() { 
        jQuery(".bt_hiddenEtape").click(function() {
            if (jQuery('.bt_hiddenEtape').html() == 'Cacher les étapes terminées') {
                jQuery('.js-accordion__header.validated').addClass('hidden');   
                jQuery('.bt_hiddenEtape').html('Afficher les étapes terminées');
                jQuery('.bt_hiddenEtape').addClass('visible');
            } else {
                jQuery('.js-accordion__header.validated').removeClass('hidden');    
                jQuery('.bt_hiddenEtape').html('Cacher les étapes terminées');
                jQuery('.bt_hiddenEtape').removeClass('visible');
            }
        });
    }

    /*
     * Supprime les doublons dans un tableau
     */
    function cleanArray(array) {
      var i, j, len = array.length, out = [], obj = {};
      for (i = 0; i < len; i++) {
        obj[array[i]] = 0;
      }
      for (j in obj) {
        out.push(j);
      }
      return out;
    }

    /*
     * Donne la valeur de la progress bar selon le nombre de checbox activé pour chacune des étapes
     */
    function progressBarEtape() {
        var co = 1;
        while (co <= 35) {
            var counter = co++;
            var valeur = 0;
 
            valeur = jQuery('#etape_'+counter+' '+'input:checked').length * 100 / jQuery('#etape_'+counter+' '+'input[type="checkbox"]').length;
            jQuery('#barre_etape_'+counter).progressbar({
                value: valeur
            });
            jQuery('#accordion1_tab'+counter+' span').remove();
            jQuery('#accordion1_tab'+counter).append('<span><span class="pc">'+Math.round(valeur)+'%</span> <span class="nb">'+jQuery('#etape_'+counter+' '+'input:checked').length+' sur '+jQuery('#etape_'+counter+' '+'input[type="checkbox"]').length+'</span></span>');
            if (Math.round(valeur) == 100) {
                jQuery('#accordion1_tab'+counter).addClass('validated');
                jQuery('#accordion1_panel'+counter).addClass('validated');
            } else {
                jQuery('#accordion1_tab'+counter).removeClass('validated');
                jQuery('#accordion1_panel'+counter).removeClass('validated');
            }
        }
    }

    /*
     * Donne la valeur de la progress bar selon le nombre de checbox activé au total
     */
    function progressBarAllEtape() {
        var valeur;
        valeur = jQuery('input:checked').length * 100 / $('input[type="checkbox"]').length;
        jQuery('#barre_etape_all').progressbar({
            value: valeur
        });
        jQuery('.title_progressBar span').remove();
        jQuery('.title_progressBar').append('<span><span class="pc">'+Math.round(valeur)+'%</span><span class="nb">'+jQuery('input:checked').length+' sur '+jQuery('input[type="checkbox"]').length+' monstres</span><span class="nbEtape">'+jQuery('.animated-accordion__header.validated').length+' étapes sur '+jQuery('.animated-accordion__header').length+'</span></span>');
        // jQuery('.title_progressBar').after('<p>Vous avez finis '+jQuery('.animated-accordion__header.validated').length+' étapes sur '+jQuery('.animated-accordion__header').length+'.</p>')
    }

    /*
     *
     * Ces fonctions permettre de garder en mémoire 
     * dans LocalStorage les checkbox selectionnés
     *
     */
    /* Vérifie au chargement de la page si le visiteur à deja activé des checkbox */
    function checkboxInit() {
        var checkedArray = [];
        if (localStorage.getItem('checkbox') != null) {
            var valCheck = localStorage.getItem('checkbox').split(",");
            for (var i = 0, c = valCheck.length; i < c; i++) {
                checkedArray.push(valCheck[i]);
                jQuery("#"+valCheck[i]).prop("checked", true);
            }       
        }
 
        /* Ajoute le checkbox cliqué dans le LocalStorage */
        jQuery('input[type="checkbox"]').click(function() {
            var valueCheck = jQuery(this).attr('id');
            /* Si la checkbox est activé > ajoute la valeur */
            /* Sinon supprime la valeur du checkbox cliqué et réinitialise le localstorage */
            if (jQuery(this).prop("checked") == true) {
                checkedArray.push(valueCheck);
                checkedArray = cleanArray(checkedArray);
                localStorage.setItem('checkbox', checkedArray);
            } else {
                for(var i = checkedArray.length - 1; i >= 0; i--) {
                    if(checkedArray[i] === valueCheck) {
                        checkedArray.splice(i, 1);
                    }
                }
                localStorage.setItem('checkbox', checkedArray);
            }

            /* Calcule la valeur des progress bar */
            progressBarEtape();
            progressBarAllEtape();
        });
    }
    
    function initSearch() {
        jQuery('#searchBox').on('input', function() { 
            console.log($(this).val());
        });
    }

    setTimeout(function(){ 
        hideStep();
        checkboxInit();
        progressBarEtape();
        progressBarAllEtape();
        initSearch();
    }, 300);

 

});