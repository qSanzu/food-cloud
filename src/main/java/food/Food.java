package food;

import lombok.Data;

import java.util.List;
@Data
public class Food {
    private String name;
    private List<Ingredient> ingredients;
}
