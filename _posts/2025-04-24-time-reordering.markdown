---
layout: post
title: "Motivating Time Travel: Time-Reordering"
categories: physics
date: 2025-04-21
mathjax: false
---
**April 24, 2025.** *In this short informal essay I give some initial thoughts on rendering causality as frame-dependent.*

<p>
I first started writing this post as part of the second part for my review of the film <i>Stag Hunt</i>, especially regarding the nature of room 34. However, it ended up growing in a different direction, so I decided to make it its own post. In this short essay I argue that time travel paradoxes in faster-than-light travel might be resolved invoking the microcausality condition. I am sure a lot more can be studied out of this idea, more formally; perhaps there's something out there, but I've just never heard or read about this. PS: After writing this one I accidentally ended up making an <a href="https://zblog741.github.io/ctc-coin">even more interesting, cooler post</a> about flipping coins back in time. I'm pretty sure a lot of interesting math can be done here too, though. 
</p>

<h2>1. Some thoughts on Microcausality and Time Ordering: A Path Towards Time Travel</h2>

<p>
In ordinary Minkowski spacetime, no subluminal observer can send or receive signals outside their light cones. Quantum field theory encodes this principle in the microcausality condition:
</p>

$$
[\phi(x), \phi(y)] = 0 \quad \text{for bosonic fields, at spacelike separations}
$$

$$
\{\phi(x), \phi(y)\} = 0 \quad \text{for fermionic fields, at spacelike separations} 
$$

<p>
which states that field operators at spacelike separations must commute (for bosons, or anti-commute for fermions)—i.e., no causal influence can propagate between those events. However, this vanishing commutator also implies <em>no intrinsic time ordering</em> of the operators is necessary in a spacelike separation (up to a sign for fermions).
</p>

<p> A key puzzle in faster-than-light travel is the so-called “tachyonic antitelephone,” where signals appear to arrive before they were sent, seemingly violating causality from the perspective of a rest observer. However, I speculate that this paradox may be resolved through a reordering of events between the superluminal traveler and the rest frame, consistent with the microcausality condition. 
Specifically, once an observer moves faster than light, events that were previously noncommutative—thus possessing a well-defined time ordering—may transition to a regime where their operators effectively commute or anticommute in the interaction between the rest frame and the superluminal traveler, allowing what appears to be “backwards-in-time” signaling without outright contradiction.</p> 

<p> 
This suggests that a finite region, corresponding to a characteristic time interval in the rest frame, becomes time-order indeterminate with respect to the superluminal traveler. 
Hence, the antitelephone scenario might not so much break causality as it redistributes causal order in a way that preserves local consistency, even if the global timeline of events becomes inherently frame-dependent. While special relativity classically renders <em>simultaneity</em> frame-dependent, faster-than-light travel may render <em>causality</em> frame-dependent. Although speculative, this viewpoint suggests a pathway to reconcile superluminal motion with coherent causal structures by accepting that time ordering, once microcausality is enforced, need not remain universal across all observers, and may imply a reformulation of past events within certain observational limits.</p> 

<p> It’s worth noting that the mechanism I’m suggesting here doesn’t rely on faster-than-light travel per se. It should apply to any spacelike-separated region where operator order can be made frame-dependent. If anything, black holes might offer a better arena to think about this, and might be of interest in the context of the information paradox (pure states unitarily evolving into mixed states as seen from the outside). </p>

<h2>2. Crossing the Speed-of-Light Horizon</h2>

<p>
Taking the film as reference, once the characters push their velocity past the speed-of-light boundary, they <em>instantaneously</em> step into a realm with no definite causal ordering. 
For subluminal observers, the travelers' push past the speed of light may seem to take forever, but for the travelers this transition would appear interesting from a quantum perspective: one moment, the system is time-ordered; the next, it “jumps” into a domain where events may happen (and may have happened) in a different order, which ontologically may not be but quantum superposition—obviously, the lack of time-ordering must eventually be reconciled with the time-ordering of the subluminal observers, which I will mention further below. 
</p>


<h2>Consider a little silly particle</h2>

<p>For fun, let's consider a quantum particle evolving under a time-dependent Hamiltonian, where interactions occur at discrete time steps. 
Imagine this particle stays in the rest frame at Earth, as observed from a subluminal traveler. 
Assume interactions occur at discrete times, and the Hamiltonian has a time-independent part $H$ supplemented by an interaction term \( V_k \) that increases entropy linearly, leading to the evolution operator

$$
O(t_f, t_i) = \prod_{k=1}^{N} e^{-i (H + V_k) \Delta t_k},
$$
where $ \Delta t_k = (t_f - t_i)/N $ for a system evolving from an initial time \( t_i \) to a final time \( t_f \). 
If each interaction contributes a small entropy increase, then 
$
S_{\text{ordered}} \sim N
$.
</p>

<h3>Indefinite Time Ordering</h3>

<p>Now, consider a scenario where causal ordering is not well-defined—but instead has indefinite time ordering that manifests through quantum superposition. Instead of a single ordered evolution, the system is in a superposition of all possible orderings:</p>

$$
O_{\text{indef}}(t_f, t_i) = \frac{1}{N!}\sum_{\sigma \in S_N} P_{\sigma} \prod_{k=1}^{N} e^{-i (H + V_{\sigma(k)}) \Delta t_k},
$$

<p>where \( S_N \) is the symmetric group of all permutations of interaction events. The resulting density matrix looks like $\rho_{\text{indef}} = \sum_{\sigma, \sigma' \in S_N} c_{\sigma, \sigma'} O_{\sigma} \rho_0 O_{\sigma'}^\dagger$. Entropy in this case is now limited by the number of allowed interaction permutations. 
Since the system's accessible histories scale up to as \( N! \), the upper limit of the entropy may satisfy $S_{\text{perm}} \sim \ln N!$.
Using Stirling’s approximation, we obtain $S_{\text{perm}} \sim N \ln N$. Thus, the total von Neumann entropy in the indefinite ordering case of the particle:</p>

$$
S_{\text{indef}} \sim N^2 \ln N.
$$

<p>This represents a much faster entropy increase than in the standard time-ordered case. 
Assuming no one history is more valid than other, crossing the speed of light would seem to trigger a sudden change in entropy scaling, "unlocking" a vastly larger space of histories. 
</p>


<h2>4. Reconciliation with Time-Ordering </h2>

<p> From the outside, time-reordering can look like time travel—the system goes from a normal causal history to reappearing in ways that defy naive cause-and-effect chains. Consider a return tachyonic time travel: a one-bit signal sent from the future to the past (the 1-bit <em>D-Mail</em>). Since time-reordering is only in the interactions between the time traveler (the signal) and the rest frame at Earth, we must consider reordering the events frame-dependently. From the perspective of the traveler, the rest observer receives the signal in the past and sends it in the future; from the rest observer’s view, the signal was sent in the past and received in the future. What looks like paradox may just be a difference in bookkeeping. Up to now we’ve thought of signal-sending and receiving as projective operators on quantum states acting as observers—there's probably a lot of ontological stuff above my paygrade to unwrap there. And isn't quantum superposition a most fitting description for this ambiguity in observerhood? The deeper we look, the fuzzier the line gets between chronology and correlation. 
</p> 

<p> Ultimately, reconciling these views may depend on our choice of framework. Deutsch’s model of closed timelike curves would leave the Universe every chance to maximize entropy and hence blow up the amount of valid histories. The Projective-CTC framework, on the other hand, prevents this jump in entropy via post-selection, playing the <a href="/assets/time/GVV9JYoa8AAh0ss.jpg" target="_blank"><i>"nothing ever happens" meme</i></a>, which is as realistic as it gets. Either way, time travel might not be about changing the past, but expanding what it means to have had one. </p>