;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname check-palindrome-easy-way) (read-case-sensitive #t) (teachpacks ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp"))) (htdp-settings #(#t constructor repeating-decimal #t #t none #f ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp")) #f)))
; reverse the string using API
(define (reverse-string str)
  (list->string (reverse (string->list str))))

(define str "hello")
; test for reverse string
(define str2 (reverse-string str))
; to check if the output is still a string
(string=? str2)
; test outputs
str
str2
; test using easy way
(define s1 "mafam")
(define (check-palindrome s1)
  (string=? s1 (reverse-string s1)))
; test with the user input
(check-palindrome (read))
