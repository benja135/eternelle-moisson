$(document).ready(function(){

	function etape_check(monstresId, monstresInfo, numEtape) {
		for (var i = 0, c = monstresId.length; i < c; i++) {
		    $('#etape_' + numEtape).append( 
		    	'<li>'
		    		+ '<input type="checkbox" name="' + monstresId[i] + '" id="' + monstresId[i] + '" />'
	    	 		+ '<label for="' + monstresId[i] + '">' + monstresInfo[i] + '</label>' +
    	 		'</li>' 
	 		);
		}	
	}

	function blocAccordion(nbEtapes) {
		$('.js-accordion').append(
			'<h2 class="js-accordion__header" data-accordion-opened="true">Etape 1 </h2>' +
			'<div class="js-accordion__panel">'+
				'<ul id="etape_1">' +
				'</ul>' +
			'</div>'
		)

		var c = 2;
		while (c <= nbEtapes) {
			var counter = c++;
			$('.js-accordion').append(
				'<h2 class="js-accordion__header">Etape' + counter + '</h2>' +
				'<div class="js-accordion__panel">'+
					'<ul id="etape_' + counter +'">' +
					'</ul>' +
				'</div>'
			)
		}
	}


    $("input:checked").change(function() {
	  console.log($(this).attr('id'));   
	});

	blocAccordion(35);

// ETAPE 1
	var Etape_1_id = ['souris_grise', 
					  'moskito', 
					  'arakne',
					  'boufton',
					  'tofu_malefique',
					  'arakne_malade',
					  'piou',
					  'flammeche',
					  'larve_bleue',
					  'crabe',
					  'tofu'];

	var Etape_1_info = ['Souris Grise (Cryptes)', 
						'Moskito (Amakna, Astrub, Pandala)', 
						'Arakne (Amakna, Astrub, Pandala)', 
						'Boufton Blanc - Boufton Noir (Amakna, Astrub, Tainéla)', 
						'Tofu Maléfique (Cimetières)',
						"Arakne Malade (Souterrains d'Astrub)",
						'Piou Bleu - Piou Jaune - Piou Rouge - Piou Vert - Piou Violet - Piou Rose (Astrub, Bonta, Sufokia)',
						'Flammèche Air - Flammèche Eau - Flammèche Feu - Flammèche Terre (Plaine des Scarafeuilles, Nids des Kwaks)',
						'Larve Bleue (Un peu partout)',
						'Crabe (Zone du Port de Madrestam, Rivages de Sufokia)',
						'Tofu (Amakna, Astrub)'];

	etape_check(Etape_1_id, Etape_1_info, '1');

// ETAPE 2
	var Etape_2_id = ['tofu_malade', 
					  'champ_champ', 
					  'pissenlit',
					  'arakne_agressive',
					  'bandit_mancho',
					  'rose',
					  'gelee',
					  'kwoan',
					  'larve_verte',
					  'bouftou',
					  'kolerat',
					  'larve_orange',
					  'boulanger',
					  'black_tiwabbit',
					  'tournesol',
					  'bandit_roublard',
					  'gobelin'];

	var Etape_2_info = ["Tofu Malade (Souterrains d'Astrub)",
						'Champ Champ (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Pissenlit Diabolique (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Arakne Agressive (Forêt des Abraknydes, Amakna)',
						'Bandit Manchot (Astrub, Passage vers Brâkmar)',
						'Rose Démoniaque (Amakna, Astrub, Champs de Cania, Tainéla)',
						'Gelée Bleue - Gelée Menthe (Péninsule des Gelées, Gelaxième Dimension)',
						"Kwoan (Cimetière d'Amakna)",
						'Larve Verte (Un peu partout)',
						'Bouftou (Amakna, Astrub, Tainéla)',
						'Kolérat (Lande de Sidimote)',
						'Larve Orange (Un peu partout)',
						'Boulanger Sombre (Façade de Brâkmar, Territoire des Bandits)',
						'Black Tiwabbit - Tiwabbit - Tiwabbit Kiafin (Île des Wabbits)',
						'Tournesol Sauvage (Amakna, Astrub, Champs de Cania)',
						'Bandit du clan des Roublards (Territoire des Bandits)',
						'Gobelin ([4, -12], Campement des Bworks, Village dévasté de Gisgoul)'];

	etape_check(Etape_2_id, Etape_2_info, '2');
});