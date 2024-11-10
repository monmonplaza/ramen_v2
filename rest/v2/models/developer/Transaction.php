<?php
class Transaction
{
    public $transaction_aid;
    public $transaction_cart_dessertCart;
    public $transaction_cart_drinks;
    public $transaction_cart_ramen;
    public $transaction_cart_toppings;
    public $transaction_change;
    public $transaction_mop;
    public $transaction_payment;
    public $transaction_subtotal;
    public $transaction_finaltotal;

    public $transaction_is_active;
    public $transaction_datetime;
    public $transaction_created;

    public $connection;
    public $lastInsertedId;

    public $tbltransaction;

    public $transaction_start;
    public $transaction_total;
    public $transaction_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tbltransaction = "ramen_transaction";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tbltransaction} ";
            $sql .= "( transaction_cart_dessertCart, ";
            $sql .= "transaction_cart_drinks, ";
            $sql .= "transaction_cart_ramen, ";
            $sql .= "transaction_cart_toppings, ";
            $sql .= "transaction_change, ";
            $sql .= "transaction_mop, ";
            $sql .= "transaction_payment, ";
            $sql .= "transaction_subtotal, ";
            $sql .= "transaction_finaltotal, ";
            $sql .= "transaction_is_active, ";
            $sql .= "transaction_datetime, ";
            $sql .= "transaction_created ) values ( ";
            $sql .= ":transaction_cart_dessertCart, ";
            $sql .= ":transaction_cart_drinks, ";
            $sql .= ":transaction_cart_ramen, ";
            $sql .= ":transaction_cart_toppings, ";
            $sql .= ":transaction_change, ";
            $sql .= ":transaction_mop, ";
            $sql .= ":transaction_payment, ";
            $sql .= ":transaction_subtotal, ";
            $sql .= ":transaction_finaltotal, ";
            $sql .= ":transaction_is_active, ";
            $sql .= ":transaction_datetime, ";
            $sql .= ":transaction_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_cart_dessertCart" => $this->transaction_cart_dessertCart,
                "transaction_cart_drinks" => $this->transaction_cart_drinks,
                "transaction_cart_ramen" => $this->transaction_cart_ramen,
                "transaction_cart_toppings" => $this->transaction_cart_toppings,
                "transaction_change" => $this->transaction_change,
                "transaction_mop" => $this->transaction_mop,
                "transaction_payment" => $this->transaction_payment,
                "transaction_subtotal" => $this->transaction_subtotal,
                "transaction_finaltotal" => $this->transaction_finaltotal,
                "transaction_is_active" => $this->transaction_is_active,
                "transaction_datetime" => $this->transaction_datetime,
                "transaction_created" => $this->transaction_created,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select * from {$this->tbltransaction} ";
            $sql .= "order by transaction_is_active desc, ";
            $sql .= "transaction_created asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select * from {$this->tbltransaction} ";
            $sql .= "order by transaction_is_active desc, ";
            $sql .= "transaction_created asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->transaction_start - 1,
                "total" => $this->transaction_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tbltransaction} ";
            $sql .= "where transaction_created like :transaction_created ";
            $sql .= "order by transaction_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_cart_dessertCart" => "%{$this->transaction_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tbltransaction} ";
            $sql .= "where transaction_aid  = :transaction_aid ";
            $sql .= "order by transaction_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_aid" => $this->transaction_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tbltransaction} set ";
            $sql .= "transaction_cart_dessertCart = :transaction_cart_dessertCart, ";
            $sql .= "transaction_cart_drinks = :transaction_cart_drinks, ";
            $sql .= "transaction_cart_ramen = :transaction_cart_ramen, ";
            $sql .= "transaction_cart_toppings = :transaction_cart_toppings, ";
            $sql .= "transaction_change = :transaction_change, ";
            $sql .= "transaction_mop = :transaction_mop, ";
            $sql .= "transaction_payment = :transaction_payment, ";
            $sql .= "transaction_subtotal = :transaction_subtotal, ";
            $sql .= "transaction_finaltotal = :transaction_finaltotal, ";
            $sql .= "transaction_datetime = :transaction_datetime ";
            $sql .= "where transaction_aid = :transaction_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_cart_dessertCart" => $this->transaction_cart_dessertCart,
                "transaction_cart_drinks" => $this->transaction_cart_drinks,
                "transaction_cart_ramen" => $this->transaction_cart_ramen,
                "transaction_cart_toppings" => $this->transaction_cart_toppings,
                "transaction_change" => $this->transaction_change,
                "transaction_mop" => $this->transaction_mop,
                "transaction_payment" => $this->transaction_payment,
                "transaction_subtotal" => $this->transaction_subtotal,
                "transaction_finaltotal" => $this->transaction_finaltotal,
                "transaction_datetime" => $this->transaction_datetime,
                "transaction_aid" => $this->transaction_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tbltransaction} set ";
            $sql .= "transaction_is_active = :transaction_is_active, ";
            $sql .= "transaction_datetime = :transaction_datetime ";
            $sql .= "where transaction_aid = :transaction_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_is_active" => $this->transaction_is_active,
                "transaction_datetime" => $this->transaction_datetime,
                "transaction_aid" => $this->transaction_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tbltransaction} ";
            $sql .= "where transaction_aid = :transaction_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "transaction_aid" => $this->transaction_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
