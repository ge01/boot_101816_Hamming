/*
# Hamming

Write a program that can calculate the Hamming difference between two DNA strands.

A mutation is simply a mistake that occurs during the creation or
copying of a nucleic acid, in particular DNA. Because nucleic acids are
vital to cellular functions, mutations tend to cause a ripple effect
throughout the cell. Although mutations are technically mistakes, a very
rare mutation may equip the cell with a beneficial attribute. In fact,
the macro effects of evolution are attributable by the accumulated
result of beneficial microscopic mutations over many generations.

The simplest and most common type of nucleic acid mutation is a point
mutation, which replaces one base with another at a single nucleotide.

By counting the number of differences between two homologous DNA strands
taken from different genomes with a common ancestor, we get a measure of
the minimum number of point mutations that could have occurred on the
evolutionary path between the two strands.

This is called the 'Hamming distance'.

It is found by comparing two DNA strands and counting how many of the
nucleotides are different from their equivalent in the other string.

    GAGCCTACTAACGGGAT
    CATCGTAATGACGGCCT
    ^ ^ ^  ^ ^    ^^

The Hamming distance between these two DNA strands is 7.

### Submitting the answer
 1. Solve the problem in the lines below
 2. When solved correctly create and push hamming.js in your github daily-challenges repo.

*/

var compute = function(dna1, dna2) {
	var dnaCount = 0;
	if (dna1.length === dna2.length) {
		for (i = 0; i < dna1.length; i++) {
			//console.log(dna1[i]);
			//console.log(dna2[i]);
			if (dna1[i] != dna2[i]) {
				dnaCount++;
			}
		}
		console.log(dnaCount);
	} else {
		return "DNA strands are not the same size";
	}
	//console.log(dnaCount);
	return -1;
};

compute("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT");
