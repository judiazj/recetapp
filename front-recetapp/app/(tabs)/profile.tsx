import { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Switch } from 'react-native';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['Vegetarian', 'Low Calorie']);
  
  const dietaryTags = [
    'Vegetarian',
    'Vegan',
    'Gluten-Free',
    'Dairy-Free',
    'Keto',
    'Paleo',
    'Low Calorie',
    'High Protein',
    'Low Carb',
    'Pescatarian',
    'Nut-Free',
    'Soy-Free'
  ];
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <>
      <Stack.Screen options={{ 
        title: 'Profile',
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity onPress={() => router.back()} style={{ marginLeft: 16 }}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
        )
      }} />
      
      <ScrollView style={styles.container}>
        <View style={styles.profileHeader}>
          <Image 
            source={{ uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3' }} 
            style={styles.profileImage} 
          />
          <Text style={styles.profileName}>Jane Doe</Text>
          <Text style={styles.profileEmail}>jane.doe@example.com</Text>
          
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Recipes</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Saved</Text>
          </View>
          <View style={styles.statDivider} />
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Created</Text>
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dietary Preferences</Text>
          <Text style={styles.sectionDescription}>
            Select your dietary preferences to get personalized recipe recommendations.
          </Text>
          
          <View style={styles.tagsContainer}>
            {dietaryTags.map((tag) => (
              <TouchableOpacity 
                key={tag} 
                style={[
                  styles.tagButton,
                  selectedTags.includes(tag) && styles.selectedTagButton
                ]}
                onPress={() => toggleTag(tag)}
              >
                <Text 
                  style={[
                    styles.tagText,
                    selectedTags.includes(tag) && styles.selectedTagText
                  ]}
                >
                  {tag}
                </Text>
                {selectedTags.includes(tag) && (
                  <Ionicons name="checkmark" size={16} color="#fff" />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <Ionicons name="notifications-outline" size={24} color="#666" />
              <Text style={styles.preferenceLabel}>Recipe Notifications</Text>
            </View>
            <Switch value={true} onValueChange={() => {}} />
          </View>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <Ionicons name="mail-outline" size={24} color="#666" />
              <Text style={styles.preferenceLabel}>Email Updates</Text>
            </View>
            <Switch value={false} onValueChange={() => {}} />
          </View>
          
          <View style={styles.preferenceItem}>
            <View style={styles.preferenceLeft}>
              <Ionicons name="globe-outline" size={24} color="#666" />
              <Text style={styles.preferenceLabel}>Unit System</Text>
            </View>
            <Text style={styles.preferenceValue}>Metric</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  profileHeader: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FF6B6B',
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f0f0f0',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tagButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    gap: 8,
  },
  selectedTagButton: {
    backgroundColor: '#FF6B6B',
  },
  tagText: {
    fontSize: 14,
    color: '#666',
  },
  selectedTagText: {
    color: '#fff',
  },
  preferenceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  preferenceLabel: {
    fontSize: 16,
    color: '#333',
  },
  preferenceValue: {
    fontSize: 16,
    color: '#666',
  },
});