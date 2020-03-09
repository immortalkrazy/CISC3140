;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-advanced-reader.ss" "lang")((modname check-palindrome) (read-case-sensitive #t) (teachpacks ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp"))) (htdp-settings #(#t constructor repeating-decimal #t #t none #f ((lib "image.rkt" "teachpack" "2htdp") (lib "universe.rkt" "teachpack" "2htdp")) #f)))
; function to reverse the string
; the easy way using API
(define reverse-string
  (lambda (s)
    (list->string (reverse (string->list s)))))

; test method
(define rev (reverse-string "hello"))
;rev

; function to create a list from string
(define string-to-list
  (lambda (s)
    (string->list s)))
; function to create back the string
(define list-to-string
  (lambda (l)
    (list->string l)))
    
; test methods
(define lst1 (string-to-list "noon"))
(define rev-lst1 (string-to-list (reverse-string "noon")))

;test outputs
;lst1
;rev-lst1

; function to compare the generated lists
(define compare-lists
  (lambda (list1 list2)
    (if (null? list1)
        (if (null? list2)
            true
            false)
        (if (null? list2)
            false
            (if (eq? (first list1) (first list2))
                (compare-lists (rest list1) (rest list2))
                false)))))

; test function        
(compare-lists lst1 rev-lst1)
; test functions
(define st1 (list-to-string lst1))
(define rev-st1 (list-to-string rev-lst1))

;test outputs
;st1
;rev-st1

(define check-palindrome
  (lambda (x)
    (compare-lists (string-to-list x) (string-to-list (reverse-string x)))))
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
; here we go

; this function is when we already gine an input in the code
(check-palindrome "noon")

; this funtion is to take input from user
; but IMPORTANT: input has to be in quotes like -> "<input>"
(check-palindrome (read))
