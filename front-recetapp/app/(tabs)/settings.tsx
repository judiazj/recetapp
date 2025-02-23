import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function SettingsScreen() {
  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: 'person-outline', label: 'Profile', type: 'link' },
        { icon: 'notifications-outline', label: 'Notifications', type: 'toggle' },
      ],
    },
    {
      title: 'Preferences',
      items: [
        { icon: 'color-palette-outline', label: 'Theme', type: 'link' },
        { icon: 'language-outline', label: 'Language', type: 'link' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: 'help-circle-outline', label: 'Help Center', type: 'link' },
        { icon: 'mail-outline', label: 'Contact Us', type: 'link' },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      {settingsSections.map((section) => (
        <View key={section.title} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          {section.items.map((item) => (
            <TouchableOpacity key={item.label} style={styles.settingItem}>
              <View style={styles.settingLeft}>
                <Ionicons name={item.icon} size={24} color="#666" />
                <Text style={styles.settingLabel}>{item.label}</Text>
              </View>
              {item.type === 'toggle' ? (
                <Switch value={false} onValueChange={() => {}} />
              ) : (
                <Ionicons name="chevron-forward" size={24} color="#ccc" />
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}

      <Link href="/(auth)/login" asChild>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 16,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    margin: 16,
    padding: 16,
    backgroundColor: '#ff3b30',
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});