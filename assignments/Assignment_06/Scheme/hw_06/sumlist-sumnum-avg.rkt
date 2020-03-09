;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname sumlist-sumnum-avg) (read-case-sensitive #t) (teachpacks ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp"))) (htdp-settings #(#t constructor repeating-decimal #t #t none #f ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp")) #f)))
; sample list
(define lst '(1 2 3 4))
; test
(length lst)

; sum list function using recursion

(define sum-list
  (lambda (lst)
    (if (null? lst)
        0
        (+ (car lst) (sum-list(cdr lst))))))
; test out put
(sum-list lst)

; funvtion to take the average
(define avg-list
  (lambda (lst)
    (if (null? lst)
        0
        (/ (sum-list lst) (length lst)))))
; test output
(avg-list lst)

; now we go for sum of the numbers given a n value

(define sum-numbers
  (lambda (n)
    (if (= n 0)
        0
        (+ n (sum-numbers (- n 1))))))

(sum-numbers 3)

; now with the user input
(sum-numbers (read))




