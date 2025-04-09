xemplu de Flux de Joc
1. Faza de așteptare (waiting room):
Se creează un joc nou când 3 jucători sunt disponibili (sau adăugați boți).

2. Faza de întrebare (question_phase)
Se trimite o întrebare aleatoare tuturor.

Jucătorii răspund → serverul calculează scorul în funcție de corectitudine și viteză.

3. Faza de atac (attack_phase)
În ordine descrescătoare a punctajului:

Jucătorii aleg un teritoriu vecin.

Dacă e ocupat → duel (se trece în duel_phase).

4. Faza finală (end_game)
Se încheie jocul dacă s-au parcurs toate turele sau cineva domină harta.
