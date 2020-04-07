<?php

use http\Exception\BadMethodCallException;

function validateGet()
{
    validateMethod('GET');
}

function validatePost()
{
    validateMethod('POST');
}

function isGet()
{
    return isMethod('GET');
}

function isPost()
{
    return isMethod('POST');
}

function validateMethod($method) {
    if (!isMethod($method)) throw new BadMethodCallException(
        'Request method must be '.$method.', not ' . $_SERVER['REQUEST_METHOD'] . '!'
    );
}

function isMethod($method) {
    return $_SERVER['REQUEST_METHOD'] === $method;
}