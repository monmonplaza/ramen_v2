<?php
class SidesDessert
{
    public $sidesdessert_aid;
    public $sidesdessert_title;
    public $sidesdessert_price;
    public $sidesdessert_description;
    public $sidesdessert_is_active;
    public $sidesdessert_datetime;
    public $sidesdessert_created;

    public $connection;
    public $lastInsertedId;

    public $tblsidesdessert;

    public $sidesdessert_start;
    public $sidesdessert_total;
    public $sidesdessert_search;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblsidesdessert = "ramen_sidesdessert";
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblsidesdessert} ";
            $sql .= "( sidesdessert_title, ";
            $sql .= "sidesdessert_is_active, ";
            $sql .= "sidesdessert_price, ";
            $sql .= "sidesdessert_description, ";
            $sql .= "sidesdessert_datetime, ";
            $sql .= "sidesdessert_created ) values ( ";
            $sql .= ":sidesdessert_title, ";
            $sql .= ":sidesdessert_is_active, ";
            $sql .= ":sidesdessert_price, ";
            $sql .= ":sidesdessert_description, ";
            $sql .= ":sidesdessert_datetime, ";
            $sql .= ":sidesdessert_created ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_title" => $this->sidesdessert_title,
                "sidesdessert_is_active" => $this->sidesdessert_is_active,
                "sidesdessert_price" => $this->sidesdessert_price,
                "sidesdessert_description" => $this->sidesdessert_description,
                "sidesdessert_datetime" => $this->sidesdessert_datetime,
                "sidesdessert_created" => $this->sidesdessert_created,
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
            $sql = "select * from {$this->tblsidesdessert} ";
            $sql .= "order by sidesdessert_is_active desc, ";
            $sql .= "sidesdessert_title asc ";
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
            $sql = "select * from {$this->tblsidesdessert} ";
            $sql .= "order by sidesdessert_is_active desc, ";
            $sql .= "sidesdessert_title asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->sidesdessert_start - 1,
                "total" => $this->sidesdessert_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function search()
    {
        try {
            $sql = "select * from {$this->tblsidesdessert} ";
            $sql .= "where sidesdessert_title like :sidesdessert_title ";
            $sql .= "order by sidesdessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_title" => "%{$this->sidesdessert_search}%",
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
            $sql = "select * from {$this->tblsidesdessert} ";
            $sql .= "where sidesdessert_aid  = :sidesdessert_aid ";
            $sql .= "order by sidesdessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_aid" => $this->sidesdessert_aid,
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
            $sql = "update {$this->tblsidesdessert} set ";
            $sql .= "sidesdessert_title = :sidesdessert_title, ";
            $sql .= "sidesdessert_price = :sidesdessert_price, ";
            $sql .= "sidesdessert_description = :sidesdessert_description, ";
            $sql .= "sidesdessert_datetime = :sidesdessert_datetime ";
            $sql .= "where sidesdessert_aid = :sidesdessert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_title" => $this->sidesdessert_title,
                "sidesdessert_price" => $this->sidesdessert_price,
                "sidesdessert_description" => $this->sidesdessert_description,
                "sidesdessert_datetime" => $this->sidesdessert_datetime,
                "sidesdessert_aid" => $this->sidesdessert_aid,
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
            $sql = "update {$this->tblsidesdessert} set ";
            $sql .= "sidesdessert_is_active = :sidesdessert_is_active, ";
            $sql .= "sidesdessert_datetime = :sidesdessert_datetime ";
            $sql .= "where sidesdessert_aid = :sidesdessert_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_is_active" => $this->sidesdessert_is_active,
                "sidesdessert_datetime" => $this->sidesdessert_datetime,
                "sidesdessert_aid" => $this->sidesdessert_aid,
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
            $sql = "delete from {$this->tblsidesdessert} ";
            $sql .= "where sidesdessert_aid = :sidesdessert_aid  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_aid" => $this->sidesdessert_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // name
    public function checkName()
    {
        try {
            $sql = "select sidesdessert_title from {$this->tblsidesdessert} ";
            $sql .= "where sidesdessert_title = :sidesdessert_title ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_title" => "{$this->sidesdessert_title}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // // name
    // public function checkAssociation()
    // {
    //     try {
    //         $sql = "select product_sidesdessert_id from {$this->tblsidesdessert} ";
    //         $sql .= "where product_sidesdessert_id = :product_sidesdessert_id ";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "product_sidesdessert_id" => $this->sidesdessert_aid,
    //         ]);
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }


    public function filterByStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblsidesdessert} ";
            $sql .= "where sidesdessert_is_active = :sidesdessert_is_active  ";
            $sql .= "order by sidesdessert_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_is_active" => $this->sidesdessert_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterByStatusAndSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblsidesdessert} ";
            $sql .= "where ";
            $sql .= "sidesdessert_is_active = :sidesdessert_is_active ";
            $sql .= "and sidesdessert_title like :sidesdessert_title ";
            $sql .= "order by sidesdessert_is_active desc, ";
            $sql .= "sidesdessert_title asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "sidesdessert_title" => "%{$this->sidesdessert_search}%",
                "sidesdessert_is_active" => $this->sidesdessert_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}