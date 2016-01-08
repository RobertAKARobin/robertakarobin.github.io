<?php

class TableString{
  private $rows;
  public $table;
  public $headers;
  public $numCols;
  public $html;
  private $on = "x";
  private $off = ".";

  private function err($message){
    die("<pre>$message</pre>");
  }

  private function matchesNumCols($array){
    $length = count($array);
    if(!$this->numCols){
      $this->numCols = $length;
      $this->headers = $array;
      return $array;
    }else if($this->numCols !== $length){
      $this->err("Expected $this->numCols columns, but got $length:\n" . join(" ", $array));
    }else return $array;
  }

  private function splitToTable(){
    $table = [];
    foreach($this->rows as $row){
      $row = trim($row);
      if($row === "") continue;
      $row = preg_split("/\s+/", $row);
      $table[] = $this->matchesNumCols($row);
    }
    return $table;
  }

  public function rowToHTML($array){
    $out = [];
    foreach($array as $datum){
      if($datum === $this->on) $out[] = "<td class='on'>$this->on</td>";
      else if($datum === $this->off) $out[] = "<td></td>";
      else $out[] = "<th><span>$datum</span></th>";
    }
    return join("", $out);
  }

  private function toHTML(){
    $out = [];
    foreach($this->table as $row){
      $out[] = "<tr>" . $this->rowToHTML($row) . "</tr>";
    }
    return join(PHP_EOL, $out);
  }

  public function transpose(){
    $table = [];
    foreach($this->table as $rIndex => $row){
      foreach($row as $cIndex => $cell){
        $table[$cIndex][] = $cell;
      }
    }
    return new self($table);
  }

  private function withHeaders(){
    $table = [];
    foreach($this->table as $row){
      $table[$row[0]] = $row;
    }
    return $table;
  }

  private function fromString($source){
    $this->rows  = preg_split("/\n/", $source);
    $this->table = $this->splitToTable();
    $this->table = $this->withHeaders();
    $this->html  = $this->toHTML();
  }

  private function fromArray($source){
    $this->table = $source;
    $this->table = $this->withHeaders();
    $this->html  = $this->toHTML();
  }

  public function __construct($source){
    switch(gettype($source)){
      case "string":
        $this->fromString($source);
        break;
      case "array":
        $this->fromArray($source);
        break;
    }
  }

}

?>
