package umm3601.garden;

import com.mongodb.MongoClient;
import com.mongodb.client.AggregateIterable;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Aggregates;
import com.mongodb.client.model.Sorts;
import com.mongodb.util.JSON;
import org.bson.Document;
import org.bson.types.ObjectId;
import java.io.IOException;
import java.util.*;
import java.util.Iterator;

import static com.mongodb.client.model.Filters.*;

public class GardenController {

    private final MongoCollection<Document> gardenCollection;


    public GardenController() throws IOException {

        MongoClient mongoClient = new MongoClient();

        MongoDatabase db = mongoClient.getDatabase("test");

        gardenCollection = db.getCollection("garden");
    }

    public String listPlantsInBed(Map<String, String[]> queryParams, String gardenLocation)
    {
        Document filterDoc = new Document();

        filterDoc = filterDoc.append("gardenLocation", gardenLocation);

        FindIterable<Document> plantsAtLocation = gardenCollection.find(filterDoc);
        //FindIterable<Document> plantsAtLocation = gardenCollection.find();
        return JSON.serialize(plantsAtLocation);
    }
}
